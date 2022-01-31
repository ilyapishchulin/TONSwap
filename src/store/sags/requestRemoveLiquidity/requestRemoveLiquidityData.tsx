import { SagaIterator } from 'redux-saga';
import { call, select, put } from 'redux-saga/effects';

import { requestAPIMethod } from 'utils/requestAPIMethod';
import { EAPIMethods } from 'enums/EAPIMethods';
import { ERequestMethods } from 'enums/ERequestMethods';

import { selectFirstInPair } from 'store/liquidity/selectors/selectFirstInPair';
import { selectSecondInPair } from 'store/liquidity/selectors/selectSecondInPair';
import { setSnackbarNotification } from 'store/router/sets/setSnackbarNotification';
import { setFirstInPair } from 'store/liquidity/sets/setFirstInPair';
import { setSecondInPair } from 'store/liquidity/sets/setSecondInPair';
import { defaultPair } from 'store/liquidity/liquidityStore';

import { LiquidityRemovedSnackbar } from 'notifications/LiquidityRemovedSnackbar/LiquidityRemovedSnackbar';

export function* requestRemoveLiquidityData(): SagaIterator<void> {
  try {
    const firstPair = yield select(selectFirstInPair);
    const secondPair = yield select(selectSecondInPair);

    const { items: { description } } = yield call(requestAPIMethod, EAPIMethods.LIQUIDITY_REMOVE, ERequestMethods.POST, {
      firstPair,
      secondPair,
    });

    yield put(setFirstInPair(defaultPair));
    yield put(setSecondInPair(defaultPair));
    yield put(setSnackbarNotification(<LiquidityRemovedSnackbar description={description} />));
  } catch (error) {
    console.log(error);
  }
}