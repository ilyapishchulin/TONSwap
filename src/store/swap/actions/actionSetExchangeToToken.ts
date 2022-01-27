import { TSwapStore } from '../TSwapStore';
import { setExchangeToToken } from '../sets/setExchangeToToken';

export const actionSetExchangeToToken = (
  state: TSwapStore,
  token: ReturnType<typeof setExchangeToToken>['data'],
): TSwapStore => ({
  ...state,
  exchangeTo: {
    ...state.exchangeTo,
    token,
  },
});
