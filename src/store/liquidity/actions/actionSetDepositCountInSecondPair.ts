import { TLiquidityStore } from '../TLiquidityStore';
import { setDepositCountInSecondPair } from '../sets/setDepositCountInSecondPair';

export const actionSetDepositCountInSecondPair = (
  state: TLiquidityStore,
  depositCount: ReturnType<typeof setDepositCountInSecondPair>['data'],
): TLiquidityStore => ({
  ...state,
  secondInPair: {
    ...state.secondInPair,
    depositCount,
  },
});
