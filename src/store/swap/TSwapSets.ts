import { setTokens } from './sets/setTokens';
import { setFromToken } from './sets/setFromToken';
import { setToToken } from './sets/setToToken';

export type TSwapSets = ReturnType<
  | typeof setTokens
  | typeof setFromToken
  | typeof setToToken
>;