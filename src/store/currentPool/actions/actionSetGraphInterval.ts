import { TCurrentPoolStore } from '../TCurrentPoolStore';
import { setGraphInterval } from '../sets/setGraphInterval';

export const actionSetGraphInterval = (
  state: TCurrentPoolStore,
  graphInterval: ReturnType<typeof setGraphInterval>['data'],
): TCurrentPoolStore => ({
  ...state,
  graphInterval,
});
