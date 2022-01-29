import { TStore } from 'store/TStore';

export const selectRequestFunction = (store: TStore): Function => store.router.routerParams.requestFunction;
