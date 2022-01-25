import { TToken } from 'types/TToken';
import { TAction } from 'store/TAction';

export const FROM_TOKEN_SET = 'fromToken/set';

export const setFromToken = (token: TToken): TAction<typeof FROM_TOKEN_SET, TToken> => ({
  type: FROM_TOKEN_SET,
  data: token,
});
