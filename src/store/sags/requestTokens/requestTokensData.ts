import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { EAPIMethods } from 'enums/EAPIMethods';
import { ERequestMethods } from 'enums/ERequestMethods';
import { requestAPIMethod } from 'utils/requestAPIMethod';

import { setTokens } from 'store/swap/sets/setTokens';

export function* requestTokensData(): SagaIterator<void> {
  try {
    const data = yield call(requestAPIMethod, EAPIMethods.TOKENS, ERequestMethods.GET);
    yield put(setTokens(data.response));
  } catch (error) {
    console.log(error);
  }
}