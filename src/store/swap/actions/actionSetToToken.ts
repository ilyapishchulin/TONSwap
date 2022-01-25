import { TSwapStore } from '../TSwapStore';
import { TToken } from 'types/TToken';

export const actionSetToToken = (
  state: TSwapStore,
  toToken: TToken,
): TSwapStore => ({
  ...state,
  toToken,
});
