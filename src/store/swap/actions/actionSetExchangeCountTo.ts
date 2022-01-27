import { TSwapStore } from '../TSwapStore';
import { setExchangeCountTo } from '../sets/setExchangeCountTo';

export const actionSetExchangeCountTo = (
  state: TSwapStore,
  exchangeCount: ReturnType<typeof setExchangeCountTo>['data'],
): TSwapStore => ({
  ...state,
  exchangeTo: {
    ...state.exchangeTo,
    exchangeCount,
  },
});
