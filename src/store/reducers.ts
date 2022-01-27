import { combineReducers } from 'redux';

import { routerReducer } from './router/routerReducer';
import { swapReducer } from './swap/swapReducer';
import { userReducer } from './user/userReducer';

export const rootReducer = combineReducers({
  router: routerReducer,
  swap: swapReducer,
  user: userReducer,
});