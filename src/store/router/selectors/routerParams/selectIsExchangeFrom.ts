import { TStore } from 'store/TStore';

export const selectIsExchangeFrom = (store: TStore): boolean => store.router.routerParams.isExchangeFrom;