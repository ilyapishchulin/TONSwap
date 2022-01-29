import { TAction } from 'store/TAction';

export const FEE_TIER_SET = 'feeTier/set';

export const setFeeTier = (feeTier: number): TAction<typeof FEE_TIER_SET, number> => ({
  type: FEE_TIER_SET,
  data: feeTier,
});
