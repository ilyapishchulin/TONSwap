import { TStore } from 'store/TStore';
import { TToken } from 'types/TToken';

export const selectFromToken = (store: TStore): TToken|undefined => store.swap.fromToken;