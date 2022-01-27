import { TToken } from 'types/TToken';
import { TAction } from 'store/TAction';

export const EXCHANGE_FROM_TOKEN_SET = 'exchangeFromToken/set';

export const setExchangeFromToken = (token: TToken|undefined): TAction<typeof EXCHANGE_FROM_TOKEN_SET, TToken|undefined> => ({
  type: EXCHANGE_FROM_TOKEN_SET,
  data: token,
});
