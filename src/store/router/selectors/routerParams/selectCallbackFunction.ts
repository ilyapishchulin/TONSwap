import { TStore } from 'store/TStore';

export const selectCallbackFunction = (store: TStore): Function => store.router.routerParams.callbackFunction;
