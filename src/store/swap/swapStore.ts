import { TSwapStore } from './TSwapStore';

export const defaultExchangeData = {
  token: undefined,
  exchangeCount: '',
  change: 0,
  price: 0,
};

export const swapStore: TSwapStore = {
  tokens: [],
  exchangeTo: defaultExchangeData,
  exchangeFrom: defaultExchangeData,
};
