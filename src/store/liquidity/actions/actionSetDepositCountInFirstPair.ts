import { TLiquidityStore } from '../TLiquidityStore';
import { setDepositCountInFirstPair } from '../sets/setDepositCountInFirstPair';

export const actionSetDepositCountInFirstPair = (
  state: TLiquidityStore,
  depositCount: ReturnType<typeof setDepositCountInFirstPair>['data'],
): TLiquidityStore => ({
  ...state,
  firstInPair: {
    ...state.firstInPair,
    depositCount,
  },
});
