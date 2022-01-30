import { TCurrentPoolStore } from '../TCurrentPoolStore';
import { currentPoolStore } from '../currentPoolStore';

export const actionClearCurrentPool = (
  state: TCurrentPoolStore,
  currentPool: TCurrentPoolStore = currentPoolStore,
): TCurrentPoolStore => ({
  ...state,
  ...currentPool,
});
