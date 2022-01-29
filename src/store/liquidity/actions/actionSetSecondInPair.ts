import { TLiquidityStore } from '../TLiquidityStore';
import { setSecondInPair } from '../sets/setSecondInPair';

export const actionSetSecondInPair = (
  state: TLiquidityStore,
  secondInPair: ReturnType<typeof setSecondInPair>['data'],
): TLiquidityStore => ({
  ...state,
  secondInPair,
});
