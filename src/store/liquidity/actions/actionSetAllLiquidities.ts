import { TLiquidityStore } from '../TLiquidityStore';
import { setAllLiquidities } from '../sets/setAllLiquidities';

export const actionSetAllLiquidities = (
  state: TLiquidityStore,
  allLiquidities: ReturnType<typeof setAllLiquidities>['data'],
): TLiquidityStore => ({
  ...state,
  allLiquidities,
});
