import { TStore } from 'store/TStore';
import { TToken } from 'types/TToken';

export const selectTokens = (store: TStore): TToken[] => store.swap.tokens;