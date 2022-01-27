import { takeLatest, debounce, ForkEffect } from 'redux-saga/effects';

import { REQUEST_TOKENS_SEND } from './sags/requestTokens/requestTokensSend';
import { requestTokensData } from './sags/requestTokens/requestTokensData';
import { REQUEST_EXCHANGE_RATE_SEND } from './sags/requestExchangeRate/requestExchangeRateSend';
import { requestExchangeRateData } from './sags/requestExchangeRate/requestExchangeRateData';
import { REQUEST_LOGIN_SEND } from './sags/requestLogin/requestLoginSend';
import { requestLoginData } from './sags/requestLogin/requestLoginData';
import { REQUEST_CONFIRM_TRANSACTION } from './sags/requestConfirmTransaction/requestConfirmTransactionSend';
import { requestConfirmTransactionData } from './sags/requestConfirmTransaction/requestConfirmTransactionData';

const EXCHANGE_RATE_DEBOUNCE_TIME = 400;

export function* rootSaga(): Generator<ForkEffect> {
  yield takeLatest(REQUEST_LOGIN_SEND, requestLoginData);
  yield takeLatest(REQUEST_TOKENS_SEND, requestTokensData);
  yield takeLatest(REQUEST_CONFIRM_TRANSACTION, requestConfirmTransactionData);
  yield debounce(EXCHANGE_RATE_DEBOUNCE_TIME, REQUEST_EXCHANGE_RATE_SEND, requestExchangeRateData);
}