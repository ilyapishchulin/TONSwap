import { TStore } from 'store/TStore';

export const selectName = (store: TStore): string => store.user.name;