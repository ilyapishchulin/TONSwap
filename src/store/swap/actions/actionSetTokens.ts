import { TSwapStore } from '../TSwapStore';
import { TToken } from 'types/TToken';

export const actionSetTokens = (
  state: TSwapStore,
  tokens: TToken[],
): TSwapStore => ({
  ...state,
  tokens,
});
