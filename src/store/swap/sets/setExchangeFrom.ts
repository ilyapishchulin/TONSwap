import { TExchangeData } from 'types/TExchangeData';
import { TAction } from 'store/TAction';

export const EXCHANGE_FROM_SET = 'exchangeFrom/set';

export const setExchangeFrom = (exchangeData: TExchangeData): TAction<typeof EXCHANGE_FROM_SET, TExchangeData> => ({
  type: EXCHANGE_FROM_SET,
  data: exchangeData,
});
