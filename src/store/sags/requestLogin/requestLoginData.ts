import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { requestAPIMethod } from 'utils/requestAPIMethod';
import { EAPIMethods } from 'enums/EAPIMethods';

import { setUser } from 'store/user/sets/setUser';

export function* requestLoginData(): SagaIterator<void> {
  try {
    const { items: userData } = yield call(requestAPIMethod, EAPIMethods.LOGIN);
    yield put(setUser(userData));
  } catch (error) {
    console.log(error);
  }
}