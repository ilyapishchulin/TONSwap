import { TCurrentPoolStore } from '../TCurrentPoolStore';
import { setGraph } from '../sets/setGraph';

export const actionSetGraph = (
  state: TCurrentPoolStore,
  graph: ReturnType<typeof setGraph>['data'],
): TCurrentPoolStore => ({
  ...state,
  graph,
});
