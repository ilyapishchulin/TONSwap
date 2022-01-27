import { TSwapStore } from '../TSwapStore';
import { setDurationLimit } from '../sets/setDurationLimit';

export const actionSetDurationLimit = (
  state: TSwapStore,
  durationLimit: ReturnType<typeof setDurationLimit>['data'],
): TSwapStore => ({
  ...state,
  durationLimit,
});
