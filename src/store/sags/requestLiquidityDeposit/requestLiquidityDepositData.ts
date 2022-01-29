import { SagaIterator } from 'redux-saga';
import { call, select, all, put } from 'redux-saga/effects';

import { requestAPIMethod } from 'utils/requestAPIMethod';
import { EAPIMethods } from 'enums/EAPIMethods';
import { ERequestMethods } from 'enums/ERequestMethods';
import { TPairPart } from 'types/TPairPart';

import { selectFirstInPair } from 'store/liquidity/selectors/selectFirstInPair';
import { selectSecondInPair } from 'store/liquidity/selectors/selectSecondInPair';
import { setSecondInPair } from 'store/liquidity/sets/setSecondInPair';
import { setFirstInPair } from 'store/liquidity/sets/setFirstInPair';

export function* requestLiquidityDepositData(): SagaIterator<void> {
  try {
    const firstInPair: TPairPart = yield select(selectFirstInPair);
    const secondInPair: TPairPart = yield select(selectSecondInPair);

    if (!firstInPair.token || !secondInPair.token) {
      return;
    }

    if (!firstInPair.depositCount && !secondInPair.depositCount) {
      return;
    }

    const bodyParams = {
      firstInPair: {
        ...firstInPair,
        token: {
          name: firstInPair.token.name,
          ticker: firstInPair.token.ticker,
        }
      },
      secondInPair: {
        ...secondInPair,
        token: {
          name: secondInPair.token.name,
          ticker: secondInPair.token.ticker,
        }
      },
    };

    const { items } = yield call(requestAPIMethod, EAPIMethods.LIQUIDITY, ERequestMethods.POST, bodyParams);
    yield all([
      put(setFirstInPair({
        ...items.firstInPair,
        token: firstInPair.token,
      })),
      put(setSecondInPair({
        ...items.secondInPair,
        token: secondInPair.token,
      })),
    ]);
  } catch (error) {
    console.log(error);
  }
}