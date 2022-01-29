import { TAction } from 'store/TAction';
import { TLiquidity } from 'types/TLiquidity';

export const ALL_LIQUIDITIES_SET = 'allLiquidities/set';

export const setAllLiquidities = (allLiquidities: TLiquidity[]): TAction<typeof ALL_LIQUIDITIES_SET, TLiquidity[]> => ({
  type: ALL_LIQUIDITIES_SET,
  data: allLiquidities,
});
