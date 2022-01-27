import { TStore } from 'store/TStore';

export const selectSlippageTolerance = (store: TStore): string => store.swap.slippageTolerance;