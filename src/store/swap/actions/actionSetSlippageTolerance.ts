import { TSwapStore } from '../TSwapStore';
import { setSlippageTolerance } from '../sets/setSlippageTolerance';

export const actionSetSlippageTolerance = (
  state: TSwapStore,
  slippageTolerance: ReturnType<typeof setSlippageTolerance>['data'],
): TSwapStore => ({
  ...state,
  slippageTolerance,
});
