import { TStore } from 'store/TStore';

export const selectedIsFromSelectedToken = (store: TStore): boolean => store.router.routerParams.isFromSelectedToken;