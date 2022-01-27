import { TSwapStore } from '../TSwapStore';
import { setExchangeTo } from '../sets/setExchangeTo';

export const actionSetExchangeTo = (
  state: TSwapStore,
  exchangeTo: ReturnType<typeof setExchangeTo>['data'],
): TSwapStore => ({
  ...state,
  exchangeTo,
});
