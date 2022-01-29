import { setTokens } from './sets/setTokens';
import { setExchangeFromToken } from './sets/setExchangeFromToken';
import { setExchangeToToken } from './sets/setExchangeToToken';
import { setExchangeFrom } from './sets/setExchangeFrom';
import { setExchangeTo } from './sets/setExchangeTo';
import { setExchangeCountFrom } from './sets/setExchangeCountFrom';
import { setExchangeCountTo } from './sets/setExchangeCountTo';

export type TSwapSets = ReturnType<
  | typeof setTokens
  | typeof setExchangeFromToken
  | typeof setExchangeToToken
  | typeof setExchangeFrom
  | typeof setExchangeTo
  | typeof setExchangeCountFrom
  | typeof setExchangeCountTo
>;