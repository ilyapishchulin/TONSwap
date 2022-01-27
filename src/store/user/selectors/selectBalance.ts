import { TStore } from 'store/TStore';

export const selectBalance = (store: TStore): Record<string, number> => store.user.balance;