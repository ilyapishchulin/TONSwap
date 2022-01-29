import { TAction } from 'store/TAction';

export const SLIPPAGE_TOLERANCE_SET = 'slippageTolerance/set';

export const setSlippageTolerance = (slippageTolerance: string): TAction<typeof SLIPPAGE_TOLERANCE_SET, string> => ({
  type: SLIPPAGE_TOLERANCE_SET,
  data: slippageTolerance,
});
