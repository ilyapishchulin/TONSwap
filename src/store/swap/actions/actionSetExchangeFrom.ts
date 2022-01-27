import { TSwapStore } from '../TSwapStore';
import { setExchangeFrom } from '../sets/setExchangeFrom';

export const actionSetExchangeFrom = (
  state: TSwapStore,
  exchangeFrom: ReturnType<typeof setExchangeFrom>['data'],
): TSwapStore => ({
  ...state,
  exchangeFrom,
});
