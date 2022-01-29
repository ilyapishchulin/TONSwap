import { combineReducers } from 'redux';

import { routerReducer } from './router/routerReducer';
import { swapReducer } from './swap/swapReducer';
import { userReducer } from './user/userReducer';
import { liquidityReducer } from './liquidity/liquidityReducer';
import { settingsReducer } from './settings/settingsReducer';
import { currentPoolReducer } from './currentPool/currentPoolReducer';

export const rootReducer = combineReducers({
  router: routerReducer,
  swap: swapReducer,
  user: userReducer,
  liquidity: liquidityReducer,
  settings: settingsReducer,
  currentPool: currentPoolReducer,
});