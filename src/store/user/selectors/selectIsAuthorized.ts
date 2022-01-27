import { TStore } from 'store/TStore';

export const selectIsAuthorized = (store: TStore): boolean => store.user.walletId !== '';