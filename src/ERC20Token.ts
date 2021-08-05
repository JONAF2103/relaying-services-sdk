import { AbiItem } from 'web3-utils';

export class ERC20Token {
    static getAbi(): AbiItem[] {
        return [
            {
                constant: true,
                inputs: [],
                name: 'name',
                outputs: [{ name: '', type: 'string' }],
                payable: false,
                stateMutability: 'view',
                type: 'function'
            },
            {
                constant: false,
                inputs: [
                    { name: '_spender', type: 'address' },
                    { name: '_value', type: 'uint256' }
                ],
                name: 'approve',
                outputs: [{ name: 'success', type: 'bool' }],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                constant: true,
                inputs: [],
                name: 'totalSupply',
                outputs: [{ name: 'supply', type: 'uint256' }],
                payable: false,
                stateMutability: 'view',
                type: 'function'
            },
            {
                constant: true,
                inputs: [],
                name: 'multiplier',
                outputs: [{ name: '', type: 'uint256' }],
                payable: false,
                stateMutability: 'view',
                type: 'function'
            },
            {
                constant: false,
                inputs: [
                    { name: '_from', type: 'address' },
                    { name: '_to', type: 'address' },
                    { name: '_value', type: 'uint256' }
                ],
                name: 'transferFrom',
                outputs: [{ name: 'success', type: 'bool' }],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                constant: true,
                inputs: [{ name: '', type: 'address' }],
                name: 'balances',
                outputs: [{ name: '', type: 'uint256' }],
                payable: false,
                stateMutability: 'view',
                type: 'function'
            },
            {
                constant: true,
                inputs: [],
                name: 'decimals',
                outputs: [{ name: 'decimals', type: 'uint8' }],
                payable: false,
                stateMutability: 'view',
                type: 'function'
            },
            {
                constant: true,
                inputs: [],
                name: '_decimals',
                outputs: [{ name: '', type: 'uint8' }],
                payable: false,
                stateMutability: 'view',
                type: 'function'
            },
            {
                constant: false,
                inputs: [],
                name: 'transferFunds',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                constant: true,
                inputs: [],
                name: 'version',
                outputs: [{ name: '', type: 'string' }],
                payable: false,
                stateMutability: 'view',
                type: 'function'
            },
            {
                constant: true,
                inputs: [{ name: '_owner', type: 'address' }],
                name: 'balanceOf',
                outputs: [{ name: 'balance', type: 'uint256' }],
                payable: false,
                stateMutability: 'view',
                type: 'function'
            },
            {
                constant: true,
                inputs: [],
                name: 'owner_address',
                outputs: [{ name: '', type: 'address' }],
                payable: false,
                stateMutability: 'view',
                type: 'function'
            },
            {
                constant: true,
                inputs: [],
                name: 'symbol',
                outputs: [{ name: '', type: 'string' }],
                payable: false,
                stateMutability: 'view',
                type: 'function'
            },
            {
                constant: false,
                inputs: [{ name: 'num', type: 'uint256' }],
                name: 'mint',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                constant: false,
                inputs: [
                    { name: '_to', type: 'address' },
                    { name: '_value', type: 'uint256' }
                ],
                name: 'transfer',
                outputs: [{ name: 'success', type: 'bool' }],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                constant: false,
                inputs: [
                    { name: 'num', type: 'uint256' },
                    { name: 'target', type: 'address' }
                ],
                name: 'mintFor',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                constant: true,
                inputs: [
                    { name: '_owner', type: 'address' },
                    { name: '_spender', type: 'address' }
                ],
                name: 'allowance',
                outputs: [{ name: 'remaining', type: 'uint256' }],
                payable: false,
                stateMutability: 'view',
                type: 'function'
            },
            {
                inputs: [
                    { name: 'initial_supply', type: 'uint256' },
                    { name: 'decimal_units', type: 'uint8' },
                    { name: 'token_name', type: 'string' },
                    { name: 'token_symbol', type: 'string' }
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'constructor'
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, name: '_to', type: 'address' },
                    { indexed: true, name: '_num', type: 'uint256' }
                ],
                name: 'Minted',
                type: 'event'
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, name: '_from', type: 'address' },
                    { indexed: true, name: '_to', type: 'address' },
                    { indexed: false, name: '_value', type: 'uint256' }
                ],
                name: 'Transfer',
                type: 'event'
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, name: '_owner', type: 'address' },
                    { indexed: true, name: '_spender', type: 'address' },
                    { indexed: false, name: '_value', type: 'uint256' }
                ],
                name: 'Approval',
                type: 'event'
            }
        ];
    }
}
