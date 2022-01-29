import { TStore } from 'store/TStore';
import { TPairPart } from 'types/TPairPart';

export const selectFirstInPair = (store: TStore): TPairPart => store.liquidity.firstInPair;
