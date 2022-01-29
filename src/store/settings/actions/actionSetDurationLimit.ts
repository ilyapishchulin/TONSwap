import { TSettingsStore } from '../TSettingsStore';
import { setDurationLimit } from '../sets/setDurationLimit';

export const actionSetDurationLimit = (
  state: TSettingsStore,
  durationLimit: ReturnType<typeof setDurationLimit>['data'],
): TSettingsStore => ({
  ...state,
  durationLimit,
});
