import { TAction } from 'store/TAction';
import { TToken } from 'types/TToken';

export const TOKEN_FIRST_IN_PAIR_SET = 'tokenFirstInPair/set';

export const setTokenFirstInPair = (token: TToken|undefined): TAction<typeof TOKEN_FIRST_IN_PAIR_SET, TToken|undefined> => ({
  type: TOKEN_FIRST_IN_PAIR_SET,
  data: token,
});
