import { TLiquidityStore } from '../TLiquidityStore';
import { setFirstInPair } from '../sets/setFirstInPair';

export const actionSetFirstInPair = (
  state: TLiquidityStore,
  firstInPair: ReturnType<typeof setFirstInPair>['data'],
): TLiquidityStore => ({
  ...state,
  firstInPair,
});
