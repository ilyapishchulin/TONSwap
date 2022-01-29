import { currentPoolStore } from './currentPoolStore';
import { TCurrentPoolSets } from './TCurrentPoolSets';
import { TCurrentPoolStore } from './TCurrentPoolStore';
import { CURRENT_POOL_SET } from './sets/setCurrentPool';
import { actionSetCurrentPool } from './actions/actionSetCurrentPool';
import { CURRENT_POOL_CLEAR } from './sets/clearCurrentPool';
import { actionClearCurrentPool } from './actions/actionClearCurrentPool';

export const currentPoolReducer = (
  state = currentPoolStore,
  action: TCurrentPoolSets,
): TCurrentPoolStore => {
  switch (action.type) {
    case CURRENT_POOL_SET:
      return actionSetCurrentPool(state, action.data);

    case CURRENT_POOL_CLEAR:
      return actionClearCurrentPool(state);

    default:
      return state;
  }
}