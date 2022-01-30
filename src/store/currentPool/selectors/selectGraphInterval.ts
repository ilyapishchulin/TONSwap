import { TStore } from 'store/TStore';
import { EGraphIntervals } from 'enums/EGraphIntervals';

export const selectGraphInterval = (store: TStore): EGraphIntervals => store.currentPool.graphInterval;
