import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { requestAPIMethod } from 'utils/requestAPIMethod';
import { EAPIMethods } from 'enums/EAPIMethods';

import { setAllLiquidities } from 'store/liquidity/sets/setAllLiquidities';

export function* requestAllLiquiditiesData(): SagaIterator<void> {
  try {
    const { items } = yield call(requestAPIMethod, EAPIMethods.ALL_LIQUIDITIES);
    yield put(setAllLiquidities(items));
  } catch (error) {
    console.log(error);
  }
}