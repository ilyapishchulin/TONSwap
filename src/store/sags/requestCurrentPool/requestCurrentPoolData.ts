import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { requestAPIMethod } from 'utils/requestAPIMethod';
import { EAPIMethods } from 'enums/EAPIMethods';
import { ERequestMethods } from 'enums/ERequestMethods';

import { setCurrentPool } from 'store/currentPool/sets/setCurrentPool';
import { requestCurrentPoolSend } from './requestCurrentPoolSend';

export function* requestCurrentPoolData({ data: id }: ReturnType<typeof requestCurrentPoolSend>): SagaIterator<void> {
  try {
    const { items } = yield call(requestAPIMethod, EAPIMethods.POOL_STATISTIC, ERequestMethods.POST, {
      id,
    });

    yield put(setCurrentPool(items));
  } catch (error) {
    console.log(error);
  }
}