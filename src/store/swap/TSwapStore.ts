import { TToken } from 'types/TToken';

export type TSwapStore = {
  fromToken?: TToken;
  toToken?: TToken;
  tokens: TToken[],
};
