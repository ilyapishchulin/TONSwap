import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './reducers';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewareEnhancer = applyMiddleware(sagaMiddleware);

export const store = createStore(rootReducer, compose(middlewareEnhancer));
sagaMiddleware.run(rootSaga);
