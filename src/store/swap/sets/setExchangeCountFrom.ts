import { TAction } from 'store/TAction';

export const EXCHANGE_COUNT_FROM_SET = 'exchangeCountFrom/set';

export const setExchangeCountFrom = (exchangeCount: string): TAction<typeof EXCHANGE_COUNT_FROM_SET, string> => ({
  type: EXCHANGE_COUNT_FROM_SET,
  data: exchangeCount,
});
