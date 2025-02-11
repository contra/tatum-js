import {Currency} from './model';

export const TATUM_API_URL = 'https://api-eu1.tatum.io';
export const TATUM_RETRY_DELAY = 1000;
export const TATUM_RETRIES = 5;

export const TEST_VET_URL = 'https://sync-testnet.vechain.org/';
export const VET_URL = 'https://sync-mainnet.vechain.org/';

export const HARDENED_THRESHOLD = 0x80000000;

export const ETH_DERIVATION_PATH = 'm/44\'/60\'/0\'/0';
export const CELO_DERIVATION_PATH = 'm/44\'/52752\'/0\'/0';
export const VET_DERIVATION_PATH = 'm/44\'/818\'/0\'/0';
export const BTC_DERIVATION_PATH = 'm/44\'/0\'/0\'/0';
export const TRON_DERIVATION_PATH = 'm/44\'/195\'/0\'/0';
export const LTC_DERIVATION_PATH = 'm/44\'/2\'/0\'/0';
export const DOGE_DERIVATION_PATH = 'm/44\'/3\'/0\'/0';
export const BCH_DERIVATION_PATH = 'm/44\'/145\'/0\'/0';
export const LYRA_DERIVATION_PATH = 'm/44\'/497\'/0\'/0';
export const ADA_DERIVATION_PATH = 'm/1852\'/1815\'/0\'';
export const TESTNET_DERIVATION_PATH = 'm/44\'/1\'/0\'/0';

export const ADA_DERIVATION_SCHEME = 2;

export const LTC_TEST_NETWORK = {
    messagePrefix: '\x18Litecoin Signed Message:\n',
    bech32: '',
    bip32: {
        public: 0x0436f6e1,
        private: 0x0436ef7d,
    },
    pubKeyHash: 0x6f,
    scriptHash: 0x3a,
    wif: 0xef,
};
export const LTC_NETWORK = {
    messagePrefix: '\x18Litecoin Signed Message:\n',
    bech32: '',
    bip32: {
        public: 0x019da462,
        private: 0x019d9cfe,
    },
    pubKeyHash: 0x30,
    scriptHash: 0x32,
    wif: 0xb0,
};

export const DOGE_TEST_NETWORK = {
    messagePrefix: '\x18Dogecoin Signed Message:\n',
    bech32: '',
    bip32: {
        public: 0x043587cf,
        private: 0x04358394,
    },
    pubKeyHash: 0x71,
    scriptHash: 0xc4,
    wif: 0xf1,
};
export const DOGE_NETWORK = {
    messagePrefix: '\x18Dogecoin Signed Message:\n',
    bech32: '',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x1e,
    scriptHash: 0x16,
    wif: 0x9e,
};

export const LYRA_TEST_NETWORK = {
    messagePrefix: '\x18DarkNet Signed Message:\n',
    bech32: '',
    bip32: {
        public: 0x043587cf,
        private: 0x04358394,
    },
    pubKeyHash: 0x7f,
    scriptHash: 0x13,
    wif: 0xae,
};
export const LYRA_NETWORK = {
    messagePrefix: '\x18DarkNet Signed Message:\n',
    bech32: '',
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
    },
    pubKeyHash: 0x30,
    scriptHash: 0x0d,
    wif: 0xae,
};

export const RIPPLE_EPOCH = 946684800;

export const CUSD_ADDRESS_MAINNET = '0x765de816845861e75a25fca122bb6898b8b1282a';
export const CUSD_ADDRESS_TESTNET = '0x874069fa1eb16d44d622f2e0ca25eea172369bc1';

export const CONTRACT_ADDRESSES = {
    [Currency.USDT.toString()]: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    [Currency.LEO.toString()]: '0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3',
    [Currency.UNI.toString()]: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
    [Currency.LINK.toString()]: '0x514910771af9ca656af840dff83e8264ecf986ca',
    [Currency.WBTC.toString()]: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    [Currency.FREE.toString()]: '0x2f141ce366a2462f02cea3d12cf93e4dca49e4fd',
    [Currency.MKR.toString()]: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
    [Currency.USDC.toString()]: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    [Currency.BAT.toString()]: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
    [Currency.TUSD.toString()]: '0x0000000000085d4780B73119b644AE5ecd22b376',
    [Currency.PAX.toString()]: '0x8e870d67f660d95d5be530380d0ec0bd388289e1',
    [Currency.PAXG.toString()]: '0x45804880de22913dafe09f4980848ece6ecbaf78',
    [Currency.PLTC.toString()]: '0x429d83bb0dcb8cdd5311e34680adc8b12070a07f',
    [Currency.MMY.toString()]: '0x385ddf50c3de724f6b8ecb41745c29f9dd3c6d75',
    [Currency.XCON.toString()]: '0x0f237d5ea7876e0e2906034d98fdb20d43666ad4',
    [Currency.USDT_TRON.toString()]: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
    [Currency.BETH.toString()]: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    [Currency.BBTC.toString()]: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    [Currency.BADA.toString()]: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
    [Currency.WBNB.toString()]: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    [Currency.BDOT.toString()]: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    [Currency.BXRP.toString()]: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
    [Currency.BLTC.toString()]: '0x4338665cbb7b2485a8855a139b75d5e34ab0db94',
    [Currency.BBCH.toString()]: '0x8ff795a6f4d97e7887c79bea79aba5cc76444adf',
};

export const CONTRACT_DECIMALS = {
    [Currency.USDT.toString()]: 6,
    [Currency.USDT_TRON.toString()]: 6,
    [Currency.WBTC.toString()]: 8,
    [Currency.LEO.toString()]: 18,
    [Currency.LINK.toString()]: 18,
    [Currency.UNI.toString()]: 18,
    [Currency.FREE.toString()]: 18,
    [Currency.MKR.toString()]: 18,
    [Currency.USDC.toString()]: 6,
    [Currency.BAT.toString()]: 18,
    [Currency.TUSD.toString()]: 18,
    [Currency.PAX.toString()]: 18,
    [Currency.PAXG.toString()]: 18,
    [Currency.PLTC.toString()]: 18,
    [Currency.MMY.toString()]: 18,
    [Currency.XCON.toString()]: 18,
    [Currency.BETH.toString()]: 18,
    [Currency.BBTC.toString()]: 18,
    [Currency.BADA.toString()]: 18,
    [Currency.WBNB.toString()]: 18,
    [Currency.BDOT.toString()]: 18,
    [Currency.BXRP.toString()]: 18,
    [Currency.BLTC.toString()]: 18,
    [Currency.BBCH.toString()]: 18,
};

export const TRANSFER_METHOD_ABI = {
    constant: false,
    inputs: [
        {
            name: 'to',
            type: 'address',
        },
        {
            name: 'value',
            type: 'uint256',
        },
    ],
    name: 'transfer',
    outputs: [
        {
            name: '',
            type: 'bool',
        },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
};
