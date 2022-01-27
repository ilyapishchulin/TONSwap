import { SagaIterator } from 'redux-saga';
import { call, select, all, put } from 'redux-saga/effects';

import { TExchangeData } from 'types/TExchangeData';
import { requestAPIMethod } from 'utils/requestAPIMethod';
import { EAPIMethods } from 'enums/EAPIMethods';
import { ERequestMethods } from 'enums/ERequestMethods';

import { selectExchangeFrom } from 'store/swap/selectors/selectExchangeFrom';
import { selectExchangeTo } from 'store/swap/selectors/selectExchangeTo';
import { setExchangeTo } from 'store/swap/sets/setExchangeTo';
import { setExchangeFrom } from 'store/swap/sets/setExchangeFrom';

export function* requestExchangeRateData(): SagaIterator<void> {
  try {
    const exchangeFrom: TExchangeData = yield select(selectExchangeFrom);
    const exchangeTo: TExchangeData = yield select(selectExchangeTo);

    if (!exchangeFrom.token || !exchangeTo.token) {
      return;
    }

    if (!exchangeFrom.exchangeCount && !exchangeTo.exchangeCount) {
      return;
    }

    const bodyParams = {
      exchangeFrom: {
        ...exchangeFrom,
        token: {
          name: exchangeFrom.token.name,
          ticker: exchangeFrom.token.ticker,
        }
      },
      exchangeTo: {
        ...exchangeTo,
        token: {
          name: exchangeTo.token.name,
          ticker: exchangeTo.token.ticker,
        }
      },
    };

    const { items } = yield call(requestAPIMethod, EAPIMethods.REQUEST_COURSE, ERequestMethods.POST, bodyParams);
    yield all([
      put(setExchangeTo({
        ...items.exchangeTo,
        token: exchangeTo.token,
      })),
      put(setExchangeFrom({
        ...items.exchangeFrom,
        token: exchangeFrom.token,
      })),
    ]);
  } catch (error) {
    console.log(error);
  }
}