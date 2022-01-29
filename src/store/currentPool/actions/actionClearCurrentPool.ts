import { TCurrentPoolStore } from '../TCurrentPoolStore';
import { currentPoolStore } from '../currentPoolStore';

export const actionClearCurrentPool = (
  state: TCurrentPoolStore,
  currentPool: TCurrentPoolStore = currentPoolStore,
): TCurrentPoolStore => {
  console.log({
    ...state,
    ...currentPool,
  });
  return {
  ...state,
  ...currentPool,
}};
