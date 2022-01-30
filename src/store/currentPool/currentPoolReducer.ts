import { currentPoolStore } from './currentPoolStore';
import { TCurrentPoolSets } from './TCurrentPoolSets';
import { TCurrentPoolStore } from './TCurrentPoolStore';
import { CURRENT_POOL_SET } from './sets/setCurrentPool';
import { actionSetCurrentPool } from './actions/actionSetCurrentPool';
import { CURRENT_POOL_CLEAR } from './sets/clearCurrentPool';
import { actionClearCurrentPool } from './actions/actionClearCurrentPool';
import { GRAPH_INTERVAL_SET } from './sets/setGraphInterval';
import { actionSetGraphInterval } from './actions/actionSetGraphInterval';
import { GRAPH_SET } from './sets/setGraph';
import { actionSetGraph } from './actions/actionSetGraph';

export const currentPoolReducer = (
  state = currentPoolStore,
  action: TCurrentPoolSets,
): TCurrentPoolStore => {
  switch (action.type) {
    case CURRENT_POOL_SET:
      return actionSetCurrentPool(state, action.data);

    case CURRENT_POOL_CLEAR:
      return actionClearCurrentPool(state);

    case GRAPH_INTERVAL_SET:
      return actionSetGraphInterval(state, action.data);

    case GRAPH_SET:
      return actionSetGraph(state, action.data);

    default:
      return state;
  }
}