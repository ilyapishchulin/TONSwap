import { TSettingsStore } from '../TSettingsStore';
import { setFeeTier } from '../sets/setFeeTier';

export const actionSetFeetTier = (
  state: TSettingsStore,
  feeTier: ReturnType<typeof setFeeTier>['data'],
): TSettingsStore => ({
  ...state,
  feeTier,
});
