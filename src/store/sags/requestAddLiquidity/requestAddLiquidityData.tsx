import { SagaIterator } from 'redux-saga';
import { call, select, put } from 'redux-saga/effects';

import { requestAPIMethod } from 'utils/requestAPIMethod';
import { EAPIMethods } from 'enums/EAPIMethods';
import { ERequestMethods } from 'enums/ERequestMethods';

import { selectFirstInPair } from 'store/liquidity/selectors/selectFirstInPair';
import { selectSecondInPair } from 'store/liquidity/selectors/selectSecondInPair';
import { setSnackbarNotification } from 'store/router/sets/setSnackbarNotification';
import { selectFeeTier } from 'store/settings/selectors/selectFeeTier';
import { setFirstInPair } from 'store/liquidity/sets/setFirstInPair';
import { setSecondInPair } from 'store/liquidity/sets/setSecondInPair';
import { defaultPair } from 'store/liquidity/liquidityStore';

import { LiquidityAddedSnackbar } from 'notifications/LiquidityAddedSnackbar/LiquidityAddedSnackbar';

export function* requestAddLiquidityData(): SagaIterator<void> {
  try {
    const firstPair = yield select(selectFirstInPair);
    const secondPair = yield select(selectSecondInPair);
    const feeTier = yield select(selectFeeTier);

    const { items: { description } } = yield call(requestAPIMethod, EAPIMethods.LIQUIDITY_ADD, ERequestMethods.POST, {
      firstPair,
      secondPair,
      feeTier,
    });

    yield put(setFirstInPair(defaultPair));
    yield put(setSecondInPair(defaultPair));
    yield put(setSnackbarNotification(<LiquidityAddedSnackbar description={description} />));
  } catch (error) {
    console.log(error);
  }
}