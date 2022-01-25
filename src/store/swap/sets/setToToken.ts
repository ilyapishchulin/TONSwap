import { TToken } from 'types/TToken';
import { TAction } from 'store/TAction';

export const TO_TOKEN_SET = 'toToken/set';

export const setToToken = (token: TToken): TAction<typeof TO_TOKEN_SET, TToken> => ({
  type: TO_TOKEN_SET,
  data: token,
});
