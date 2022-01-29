import { TAction } from 'store/TAction';
import { TToken } from 'types/TToken';

export const TOKEN_SECOND_IN_PAIR_SET = 'tokenSecondInPair/set';

export const setTokenSecondInPair = (token: TToken|undefined): TAction<typeof TOKEN_SECOND_IN_PAIR_SET, TToken|undefined> => ({
  type: TOKEN_SECOND_IN_PAIR_SET,
  data: token,
});
