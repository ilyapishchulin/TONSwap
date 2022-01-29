import { TCurrentPoolStore } from '../TCurrentPoolStore';

export const actionSetCurrentPool = (
  state: TCurrentPoolStore,
  currentPool: TCurrentPoolStore,
): TCurrentPoolStore => ({
  ...state,
  ...currentPool,
});
