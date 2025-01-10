export const DEV_MODE = location.hostname === 'localhost';
// export const DEV_MODE = false;

export const TLD = 'det0x';

export const HERO_TEXT = 'Own your .' + TLD;
export const SUB_TEXT = 'Decentralized domains for websites, wallets and web3';
export const SEARCH_PLACEHOLDER = 'Find your .' + TLD;
export const PAGE_TITLE = HERO_TEXT;

export const TWITTER_HANDLE = 'hns_id';

// Check https://cloud.walletconnect.com/
export const WALLET_CONNECT_APP_NAME = 'det0x';
export const WALLET_CONNECT_PROJECT_ID = '6e966e7ad9ae5cad37e3d2f095818f96';

export const STATUS_CONTRACT_ADDR = DEV_MODE
  ? '0x075489a52BcF5cd91c589046C3F5807e7fFC3647'
  : '0xa89356391fB34e18360E79102536daD46F4a4199';

export const REGISTER_CONTRACT_ADDR = DEV_MODE
  ? '0x529B2b5B576c27769Ae0aB811F1655012f756C00'
  : '0xfda87CC032cD641ac192027353e5B25261dfe6b3';

export const PRIMARY_NAME_CONTRACT_ADDR = DEV_MODE
  ? '0x342d6524829bedfF5Ce9f56cd56d5baAcf3dbC58'
  : '0xDDa56f06D80f3D8E3E35159701A63753f39c3BCB';
