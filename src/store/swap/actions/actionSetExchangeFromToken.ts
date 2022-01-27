import { TSwapStore } from '../TSwapStore';
import { setExchangeFromToken } from '../sets/setExchangeFromToken';

export const actionSetExchangeFromToken = (
  state: TSwapStore,
  token: ReturnType<typeof setExchangeFromToken>['data'],
): TSwapStore => ({
  ...state,
  exchangeFrom: {
    ...state.exchangeFrom,
    token,
  },
});
