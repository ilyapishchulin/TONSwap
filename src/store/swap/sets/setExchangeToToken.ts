import { TToken } from 'types/TToken';
import { TAction } from 'store/TAction';

export const EXCHANGE_TO_TOKEN_SET = 'exchangeToToken/set';

export const setExchangeToToken = (token: TToken|undefined): TAction<typeof EXCHANGE_TO_TOKEN_SET, TToken|undefined> => ({
  type: EXCHANGE_TO_TOKEN_SET,
  data: token,
});
