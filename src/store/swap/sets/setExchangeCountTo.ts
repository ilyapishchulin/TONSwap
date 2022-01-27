import { TAction } from 'store/TAction';

export const EXCHANGE_COUNT_TO_SET = 'exchangeCountTo/set';

export const setExchangeCountTo = (exchangeCount: string): TAction<typeof EXCHANGE_COUNT_TO_SET, string> => ({
  type: EXCHANGE_COUNT_TO_SET,
  data: exchangeCount,
});
