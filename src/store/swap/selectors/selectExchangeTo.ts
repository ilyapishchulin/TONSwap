import { TStore } from 'store/TStore';
import { TExchangeData } from 'types/TExchangeData';

export const selectExchangeTo = (store: TStore): TExchangeData => store.swap.exchangeTo;