import { TExchangeData } from 'types/TExchangeData';
import { TAction } from 'store/TAction';

export const EXCHANGE_TO_SET = 'exchangeTo/set';

export const setExchangeTo = (exchangeData: TExchangeData): TAction<typeof EXCHANGE_TO_SET, TExchangeData> => ({
  type: EXCHANGE_TO_SET,
  data: exchangeData,
});
