import { SagaIterator } from 'redux-saga';
import { call, select, put } from 'redux-saga/effects';

import { TExchangeData } from 'types/TExchangeData';
import { requestAPIMethod } from 'utils/requestAPIMethod';
import { EAPIMethods } from 'enums/EAPIMethods';
import { ERequestMethods } from 'enums/ERequestMethods';

import { selectExchangeFrom } from 'store/swap/selectors/selectExchangeFrom';
import { selectExchangeTo } from 'store/swap/selectors/selectExchangeTo';
import { setSnackbarNotification } from 'store/router/sets/setSnackbarNotification';

import { SuccessTransactionSnackbar } from 'notifications/SuccessTransactionSnackbar/SuccessTransactionSnackbar';
import { FailedTransactionSnackbar } from 'notifications/FailedTransactionSnackbar/FailedTransactionSnackbar';

export function* requestConfirmTransactionData(): SagaIterator<void> {
  try {
    const exchangeFrom: TExchangeData = yield select(selectExchangeFrom);
    const exchangeTo: TExchangeData = yield select(selectExchangeTo);

    const { response, items: { description } } = yield call(requestAPIMethod, EAPIMethods.CONFIRM_TRANSACTION, ERequestMethods.POST, {
      exchangeFrom,
      exchangeTo,
    });

    const Component = response ? SuccessTransactionSnackbar : FailedTransactionSnackbar;
    yield put(setSnackbarNotification(<Component description={description} />));
  } catch (error) {
    console.log(error);
  }
}