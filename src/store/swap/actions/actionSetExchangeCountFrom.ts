import { TSwapStore } from '../TSwapStore';
import { setExchangeCountFrom } from '../sets/setExchangeCountFrom';

export const actionSetExchangeCountFrom = (
  state: TSwapStore,
  exchangeCount: ReturnType<typeof setExchangeCountFrom>['data'],
): TSwapStore => ({
  ...state,
  exchangeFrom: {
    ...state.exchangeFrom,
    exchangeCount,
  },
});
