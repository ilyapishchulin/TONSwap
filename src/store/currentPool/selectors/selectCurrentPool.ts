import { TStore } from 'store/TStore';
import { TCurrentPoolStore } from '../TCurrentPoolStore';

export const selectCurrentPool = (store: TStore): TCurrentPoolStore => store.currentPool;
