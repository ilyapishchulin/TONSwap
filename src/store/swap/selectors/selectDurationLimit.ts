import { TStore } from 'store/TStore';

export const selectDurationLimit = (store: TStore): string => store.swap.durationLimit;