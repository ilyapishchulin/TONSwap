import { TSettingsStore } from '../TSettingsStore';
import { setSlippageTolerance } from '../sets/setSlippageTolerance';

export const actionSetSlippageTolerance = (
  state: TSettingsStore,
  slippageTolerance: ReturnType<typeof setSlippageTolerance>['data'],
): TSettingsStore => ({
  ...state,
  slippageTolerance,
});
