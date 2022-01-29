import { TToken } from 'types/TToken';
import { TExchangeData } from 'types/TExchangeData';

export type TSwapStore = {
  tokens: TToken[],
  exchangeFrom: TExchangeData;
  exchangeTo: TExchangeData;
};
