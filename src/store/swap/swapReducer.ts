import { swapStore } from './swapStore';
import { TSwapStore } from './TSwapStore';
import { TSwapSets } from './TSwapSets';

import { TOKENS_SET } from './sets/setTokens';
import { actionSetTokens } from './actions/actionSetTokens';
import { EXCHANGE_FROM_TOKEN_SET } from './sets/setExchangeFromToken';
import { actionSetExchangeFromToken } from './actions/actionSetExchangeFromToken';
import { EXCHANGE_TO_TOKEN_SET } from './sets/setExchangeToToken';
import { actionSetExchangeToToken } from './actions/actionSetExchangeToToken';
import { EXCHANGE_FROM_SET } from './sets/setExchangeFrom';
import { actionSetExchangeFrom } from './actions/actionSetExchangeFrom';
import { EXCHANGE_TO_SET } from './sets/setExchangeTo';
import { actionSetExchangeTo } from './actions/actionSetExchangeTo';
import { EXCHANGE_COUNT_TO_SET } from './sets/setExchangeCountTo';
import { actionSetExchangeCountTo } from './actions/actionSetExchangeCountTo';
import { EXCHANGE_COUNT_FROM_SET } from './sets/setExchangeCountFrom';
import { actionSetExchangeCountFrom } from './actions/actionSetExchangeCountFrom';

export const swapReducer = (
  state = swapStore,
  action: TSwapSets,
): TSwapStore => {
  switch (action.type) {
    case TOKENS_SET:
      return actionSetTokens(state, action.data);

    case EXCHANGE_FROM_TOKEN_SET:
      return actionSetExchangeFromToken(state, action.data);

    case EXCHANGE_TO_TOKEN_SET:
      return actionSetExchangeToToken(state, action.data);

    case EXCHANGE_FROM_SET:
      return actionSetExchangeFrom(state, action.data);

    case EXCHANGE_TO_SET:
      return actionSetExchangeTo(state, action.data);

    case EXCHANGE_COUNT_FROM_SET:
      return actionSetExchangeCountFrom(state, action.data);

    case EXCHANGE_COUNT_TO_SET:
      return actionSetExchangeCountTo(state, action.data);

    default:
      return state;
  }
}