import { TSwapStore } from '../TSwapStore';
import { TToken } from 'types/TToken';

export const actionSetFromToken = (
  state: TSwapStore,
  fromToken: TToken,
): TSwapStore => ({
  ...state,
  fromToken,
});
