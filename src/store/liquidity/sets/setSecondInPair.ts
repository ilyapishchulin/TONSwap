import { TAction } from 'store/TAction';
import { TPairPart } from 'types/TPairPart';

export const SECOND_IN_PAIR_SET = 'secondInPair/set';

export const setSecondInPair = (token: TPairPart): TAction<typeof SECOND_IN_PAIR_SET, TPairPart> => ({
  type: SECOND_IN_PAIR_SET,
  data: token,
});
