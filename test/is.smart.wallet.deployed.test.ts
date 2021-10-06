import { RelayingServices } from '../src';
import { MockRelayingServices, Web3Mock } from './mock';
import Expect = jest.Expect;
import { MOCK_SMART_WALLET_ADDRESS } from './constants';

declare const expect: Expect;

describe('Tests for is smart wallet', () => {
    let sdk: RelayingServices;

    beforeEach(async () => {
        sdk = new MockRelayingServices();
        await sdk.initialize({});
    });

    it('Should check if a smart wallet is deployed', async () => {
        const deployed = await sdk.isSmartWalletDeployed(
            MOCK_SMART_WALLET_ADDRESS
        );
        expect(deployed).toBeTruthy();
    });
});

describe('Tests for is smart wallet without being deployed', () => {
    let sdk: RelayingServices;

    beforeEach(async () => {
        sdk = new MockRelayingServices(
            new Web3Mock({
                getCodeEmpty: true
            }) as any
        );
    });

    it('Should return false if the smart wallet is not deployed', async () => {
        const deployed = await sdk.isSmartWalletDeployed(
            MOCK_SMART_WALLET_ADDRESS
        );
        expect(deployed).toBeFalsy();
    });
});
