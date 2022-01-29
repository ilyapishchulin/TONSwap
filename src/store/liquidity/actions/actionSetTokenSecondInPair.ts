import { TLiquidityStore } from '../TLiquidityStore';
import { setTokenSecondInPair } from '../sets/setTokenSecondInPair';

export const actionSetTokenSecondInPair = (
  state: TLiquidityStore,
  token: ReturnType<typeof setTokenSecondInPair>['data'],
): TLiquidityStore => ({
  ...state,
  secondInPair: {
    ...state.secondInPair,
    token,
  },
});
