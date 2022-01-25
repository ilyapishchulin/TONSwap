import { swapStore } from './swapStore';
import { TSwapStore } from './TSwapStore';
import { TSwapSets } from './TSwapSets';

import { TOKENS_SET } from './sets/setTokens';
import { actionSetTokens } from './actions/actionSetTokens';
import { FROM_TOKEN_SET } from './sets/setFromToken';
import { actionSetFromToken } from './actions/actionSetFromToken';
import { TO_TOKEN_SET } from './sets/setToToken';
import { actionSetToToken } from './actions/actionSetToToken';

export const swapReducer = (
  state = swapStore,
  action: TSwapSets,
): TSwapStore => {
  switch (action.type) {
    case TOKENS_SET:
      return actionSetTokens(state, action.data);

    case FROM_TOKEN_SET:
      return actionSetFromToken(state, action.data);

    case TO_TOKEN_SET:
      return actionSetToToken(state, action.data);

    default:
      return state;
  }
}