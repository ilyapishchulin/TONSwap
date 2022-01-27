import { TSwapStore } from '../TSwapStore';
import { setTokens } from '../sets/setTokens';

export const actionSetTokens = (
  state: TSwapStore,
  tokens: ReturnType<typeof setTokens>['data'],
): TSwapStore => ({
  ...state,
  tokens,
});
