import { TLiquidityStore } from '../TLiquidityStore';
import { setTokenFirstInPair } from '../sets/setTokenFirstInPair';

export const actionSetTokenFirstInPair = (
  state: TLiquidityStore,
  token: ReturnType<typeof setTokenFirstInPair>['data'],
): TLiquidityStore => ({
  ...state,
  firstInPair: {
    ...state.firstInPair,
    token,
  },
});
