import { TStore } from 'store/TStore';
import { TPairPart } from 'types/TPairPart';

export const selectSecondInPair = (store: TStore): TPairPart => store.liquidity.secondInPair;
