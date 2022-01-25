import { TToken } from 'types/TToken';
import { TAction } from 'store/TAction';

export const TOKENS_SET = 'tokens/set';

export const setTokens = (tokens: TToken[]): TAction<typeof TOKENS_SET, TToken[]> => ({
  type: TOKENS_SET,
  data: tokens,
});
