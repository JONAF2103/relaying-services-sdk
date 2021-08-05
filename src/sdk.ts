import { RelayingServices } from './index';
import {
    Account,
    HttpProvider,
    SignedTransaction,
    Transaction,
    TransactionConfig,
    TransactionReceipt
} from 'web3-core';
import { EnvelopingConfig, Web3Provider } from '@rsksmart/rif-relay-common';
import {
    RelayProvider,
    resolveConfiguration
} from '@rsksmart/rif-relay-client';
import Web3 from 'web3';
import { RelayVerifier } from '@rsksmart/rif-relay-contracts';
import { addressHasCode, getAbiItem, getContract } from './utils';
import { ERC20Token } from './ERC20Token';
import { DEFAULT_NETWORK_ID, ZERO_ADDRESS } from './constants';
import { RelayingServicesConfiguration, SmartWallet } from './interfaces';
import { Contracts } from './contracts';

export class DefaultRelayingServicesSDK implements RelayingServices {
    private readonly envelopingConfig: EnvelopingConfig;
    private readonly web3Instance: Web3;
    private readonly chainId: string;
    private readonly account?: Account;
    private developmentAccounts: string[];
    private relayProvider: RelayProvider;
    private contracts: Contracts;

    constructor({
        rskHost,
        account,
        envelopingConfig,
        web3Provider,
        chainId
    }: RelayingServicesConfiguration) {
        this.envelopingConfig = envelopingConfig;
        this.web3Instance = web3Provider
            ? new Web3(web3Provider)
            : new Web3(rskHost);
        this.chainId = chainId ?? DEFAULT_NETWORK_ID;
        this.account = account;
        this.initialize()
            .then(() => {
                console.debug('RelayingServicesSDK initialized correctly');
            })
            .catch((error) => {
                console.error('RelayingServicesSDK fail to initialize', error);
            });
    }

    async initialize(): Promise<void> {
        this.developmentAccounts = await this.web3Instance.eth.getAccounts();
        const resolvedConfig = await resolveConfiguration(
            this.web3Instance.currentProvider as Web3Provider,
            {
                onlyPreferredRelays: true,
                preferredRelays: this.envelopingConfig.preferredRelays,
                gasPriceFactorPercent: 0,
                relayLookupWindowBlocks: 1e5,
                chainId: parseInt(this.chainId),
                relayVerifierAddress:
                    this.contracts.addresses.smartWalletRelayVerifier,
                deployVerifierAddress:
                    this.contracts.addresses.smartWalletDeployVerifier,
                smartWalletFactoryAddress:
                    this.contracts.addresses.smartWalletFactory
            }
        );
        resolvedConfig.relayHubAddress = this.contracts.addresses.relayHub;
        const provider = new RelayProvider(
            this.web3Instance.currentProvider as HttpProvider,
            resolvedConfig
        );
        if (this.account) {
            provider.addAccount({
                address: this.account.address,
                privateKey: Buffer.from(
                    this.account.privateKey.replaceAll('0x', ''),
                    'hex'
                )
            });
        }
        this.web3Instance.setProvider(provider);
        this.relayProvider = provider;
        this.contracts = new Contracts(this.web3Instance, this.chainId);
    }

    async allowToken(
        tokenAddress: string,
        contractsOwnerAccount: Account
    ): Promise<void> {
        console.debug('allowToken Params', {
            tokenAddress,
            contractsOwnerAccount
        });
        const abiMethod = getAbiItem(RelayVerifier.abi, 'acceptToken');
        const encodedCall = web3.eth.abi.encodeFunctionCall(abiMethod, [
            tokenAddress
        ]);
        const transactionConfig: TransactionConfig = {
            from: contractsOwnerAccount.address,
            to: this.contracts.addresses.smartWalletRelayVerifier,
            data: encodedCall
        };
        const signedTransaction: SignedTransaction =
            await contractsOwnerAccount.signTransaction(transactionConfig);
        const transactionReceipt: TransactionReceipt =
            await this.web3Instance.eth.sendSignedTransaction(
                signedTransaction.rawTransaction
            );
        if (!transactionReceipt.status) {
            const errorMessage = 'Error sending allowToken transaction';
            console.debug(errorMessage, transactionReceipt);
            throw new Error(errorMessage);
        }
    }

    async claim(commitmentReceipt: any): Promise<void> {
        console.debug('claim Params', {
            commitmentReceipt
        });
        throw new Error(
            'NOT IMPLEMENTED: this will be available with arbiter integration.'
        );
    }

    async deploySmartWallet(
        smartWallet: SmartWallet,
        tokenAddress?: string,
        tokenAmount?: number
    ): Promise<SmartWallet> {
        console.debug('deploySmartWallet Params', {
            smartWallet,
            tokenAddress,
            tokenAmount
        });

        console.debug('Checking if the wallet already exists');

        if (!(await addressHasCode(this.web3Instance, smartWallet.address))) {
            const token = await getContract(
                this.web3Instance,
                ERC20Token.getAbi(),
                tokenAddress
            );

            const balance = await token.methods
                .balanceOf(smartWallet.address)
                .call();

            if (balance <= 0) {
                console.warn(
                    "Smart Wallet doesn't have funds so this will be a subsidized deploy."
                );
            }

            console.debug(
                'Deploying smart wallet for address',
                smartWallet.address
            );

            const transactionHash = await this.relayProvider.deploySmartWallet({
                from: this.getAccountAddress(),
                to: ZERO_ADDRESS,
                callVerifier:
                    this.contracts.addresses.smartWalletDeployVerifier,
                callForwarder: this.contracts.addresses.smartWalletFactory,
                tokenContract: tokenAddress,
                tokenAmount: tokenAmount.toString(),
                data: '0x',
                index: smartWallet.index.toString(),
                recoverer: ZERO_ADDRESS,
                isSmartWalletDeploy: true,
                onlyPreferredRelays: true,
                smartWalletAddress: smartWallet.address
            });

            console.debug(
                'Smart wallet successfully deployed',
                transactionHash
            );

            smartWallet.deployTransaction =
                await this.web3Instance.eth.getTransactionReceipt(
                    transactionHash
                );
            smartWallet.deployed = smartWallet.deployTransaction.status;
            smartWallet.tokenAddress = tokenAddress;
            return smartWallet;
        } else {
            throw new Error('Smart Wallet already deployed');
        }
    }

    async generateSmartWallet(smartWalletIndex: number): Promise<SmartWallet> {
        console.debug('generateSmartWallet Params', {
            smartWalletIndex
        });

        console.debug('Generating computed address for smart wallet');

        const smartWalletAddress = this.contracts
            .getSmartWalletFactory()
            .methods.getSmartWalletAddress(
                this.getAccountAddress(),
                ZERO_ADDRESS,
                smartWalletIndex
            )
            .call();

        console.debug('Checking if the wallet already exists');

        const deployed = await addressHasCode(
            this.web3Instance,
            smartWalletAddress
        );

        return {
            address: smartWalletAddress,
            index: smartWalletIndex,
            deployed
        };
    }

    async getAllowedTokens(): Promise<string[]> {
        const relayVerifierContract =
            await this.contracts.getSmartWalletRelayVerifier();
        const deployVerifierContract =
            await this.contracts.getSmartWalletDeployVerifier();
        const relayVerifierTokens: string[] =
            await relayVerifierContract.methods.getAcceptedTokens().call();
        const deployVerifierTokens: string[] =
            await deployVerifierContract.methods.getAcceptedTokens().call();
        const tokens = new Set<string>([
            ...relayVerifierTokens,
            ...deployVerifierTokens
        ]);
        return [...tokens];
    }

    async isAllowedToken(tokenAddress: string): Promise<boolean> {
        console.debug('isAllowedToken Params', {
            tokenAddress
        });
        const relayVerifierContract =
            await this.contracts.getSmartWalletRelayVerifier();
        const deployVerifierContract =
            await this.contracts.getSmartWalletDeployVerifier();
        const relayVerifierAllowsToken: boolean =
            await relayVerifierContract.methods
                .acceptsToken(tokenAddress)
                .call();
        const deployVerifierAllowsToken: boolean =
            await deployVerifierContract.methods
                .acceptsToken(tokenAddress)
                .call();
        return relayVerifierAllowsToken && deployVerifierAllowsToken;
    }

    async isSmartWalletDeployed(smartWalletAddress: string): Promise<boolean> {
        console.debug('isSmartWalletDeployed Params', {
            smartWalletAddress
        });
        return await addressHasCode(this.web3Instance, smartWalletAddress);
    }

    async relayTransaction(
        unsignedTx: Transaction,
        smartWallet: SmartWallet,
        tokenAmount?: number
    ): Promise<string> {
        console.debug('relayTransaction Params', {
            unsignedTx,
            smartWallet,
            tokenAmount
        });
        throw new Error('NOT IMPLEMENTED');
    }

    getAccountAddress(): string {
        return this.account
            ? this.account.address
            : this.developmentAccounts[0];
    }
}
