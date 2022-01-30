import { TAction } from 'store/TAction';
import { EFeeTiers } from 'enums/EFeeTiers';

export const FEE_TIER_SET = 'feeTier/set';

export const setFeeTier = (feeTier: EFeeTiers): TAction<typeof FEE_TIER_SET, EFeeTiers> => ({
  type: FEE_TIER_SET,
  data: feeTier,
});
