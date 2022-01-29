import { TStore } from 'store/TStore';

export const selectFeeTier = (store: TStore): number => store.settings.feeTier;