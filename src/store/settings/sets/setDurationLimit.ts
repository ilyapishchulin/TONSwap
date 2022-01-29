import { TAction } from 'store/TAction';

export const DURATION_LIMIT_SET = 'durationLimit/set';

export const setDurationLimit = (durationLimit: string): TAction<typeof DURATION_LIMIT_SET, string> => ({
  type: DURATION_LIMIT_SET,
  data: durationLimit,
});
