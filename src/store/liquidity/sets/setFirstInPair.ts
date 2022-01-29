import { TAction } from 'store/TAction';
import { TPairPart } from 'types/TPairPart';

export const FIRST_IN_PAIR_SET = 'firstInPair/set';

export const setFirstInPair = (token: TPairPart): TAction<typeof FIRST_IN_PAIR_SET, TPairPart> => ({
  type: FIRST_IN_PAIR_SET,
  data: token,
});
