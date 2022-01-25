import { combineReducers } from 'redux';

import { routerReducer } from './router/routerReducer';
import { swapReducer } from './swap/swapReducer';

export const rootReducer = combineReducers({
  router: routerReducer,
  swap: swapReducer,
});