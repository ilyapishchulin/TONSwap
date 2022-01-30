import { takeLatest, takeLeading, debounce, ForkEffect } from 'redux-saga/effects';

import { REQUEST_TOKENS_SEND } from './sags/requestTokens/requestTokensSend';
import { requestTokensData } from './sags/requestTokens/requestTokensData';
import { REQUEST_EXCHANGE_RATE_SEND } from './sags/requestExchangeRate/requestExchangeRateSend';
import { requestExchangeRateData } from './sags/requestExchangeRate/requestExchangeRateData';
import { REQUEST_LOGIN_SEND } from './sags/requestLogin/requestLoginSend';
import { requestLoginData } from './sags/requestLogin/requestLoginData';
import { REQUEST_CONFIRM_TRANSACTION } from './sags/requestConfirmTransaction/requestConfirmTransactionSend';
import { requestConfirmTransactionData } from './sags/requestConfirmTransaction/requestConfirmTransactionData';
import { REQUEST_ALL_LIQUIDITIES_SEND } from './sags/requestAllLiquidities/requestAllLiquiditiesSend';
import { requestAllLiquiditiesData } from './sags/requestAllLiquidities/requestAllLiquiditiesData';
import { REQUEST_LIQUIDITY_DEPOSIT } from './sags/requestLiquidityDeposit/requestLiquidityDepositSend';
import { requestLiquidityDepositData } from './sags/requestLiquidityDeposit/requestLiquidityDepositData';
import { REQUEST_ADD_LIQUIDITY_SEND } from './sags/requestAddLiquidity/requestAddLiquiditySend';
import { requestAddLiquidityData } from './sags/requestAddLiquidity/requestAddLiquidityData';
import { REQUEST_CURRENT_POOL_SEND } from './sags/requestCurrentPool/requestCurrentPoolSend';
import { requestCurrentPoolData } from './sags/requestCurrentPool/requestCurrentPoolData';
import { REQUEST_GRAPH_BY_INTERVAL_SEND } from './sags/requestGraphByInterval/requestGraphByIntervalSend';
import { requestGraphByIntervalData } from './sags/requestGraphByInterval/requestGraphByIntervalData';

const EXCHANGE_RATE_DEBOUNCE_TIME = 400;
const LIQUIDITY_DEBOUNCE_TIME = 400;

export function* rootSaga(): Generator<ForkEffect> {
  yield takeLatest(REQUEST_LOGIN_SEND, requestLoginData);
  yield takeLatest(REQUEST_TOKENS_SEND, requestTokensData);
  yield takeLatest(REQUEST_CONFIRM_TRANSACTION, requestConfirmTransactionData);
  yield takeLeading(REQUEST_ALL_LIQUIDITIES_SEND, requestAllLiquiditiesData);
  yield takeLatest(REQUEST_ADD_LIQUIDITY_SEND, requestAddLiquidityData);
  yield takeLatest(REQUEST_CURRENT_POOL_SEND, requestCurrentPoolData);
  yield takeLatest(REQUEST_GRAPH_BY_INTERVAL_SEND, requestGraphByIntervalData);
  yield debounce(LIQUIDITY_DEBOUNCE_TIME, REQUEST_LIQUIDITY_DEPOSIT, requestLiquidityDepositData);
  yield debounce(EXCHANGE_RATE_DEBOUNCE_TIME, REQUEST_EXCHANGE_RATE_SEND, requestExchangeRateData);
}