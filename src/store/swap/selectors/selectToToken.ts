import { TStore } from 'store/TStore';
import { TToken } from 'types/TToken';

export const selectToToken = (store: TStore): TToken|undefined => store.swap.toToken;