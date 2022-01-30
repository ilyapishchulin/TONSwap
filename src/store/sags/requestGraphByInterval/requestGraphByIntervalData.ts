import { SagaIterator } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';

import { requestAPIMethod } from 'utils/requestAPIMethod';
import { EAPIMethods } from 'enums/EAPIMethods';
import { ERequestMethods } from 'enums/ERequestMethods';

import { selectGraphInterval } from 'store/currentPool/selectors/selectGraphInterval';
import { setGraph } from 'store/currentPool/sets/setGraph';

export function* requestGraphByIntervalData(): SagaIterator<void> {
  try {
    const graphInterval = yield select(selectGraphInterval);

    const { items } = yield call(requestAPIMethod, EAPIMethods.GRAPH_BY_INTERVAL, ERequestMethods.POST, { graphInterval });
    yield put(setGraph(items));
  } catch (error) {
    console.log(error);
  }
}