import { TStore } from 'store/TStore';
import { TExchangeData } from 'types/TExchangeData';

export const selectExchangeFrom = (store: TStore): TExchangeData => store.swap.exchangeFrom;