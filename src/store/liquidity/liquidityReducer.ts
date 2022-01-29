import { liquidityStore } from './liquidityStore';
import { TLiquidityStore } from './TLiquidityStore';
import { TLiquiditySets } from './TLiquiditySets';
import { ALL_LIQUIDITIES_SET } from './sets/setAllLiquidities';
import { actionSetAllLiquidities } from './actions/actionSetAllLiquidities';
import { FIRST_IN_PAIR_SET } from './sets/setFirstInPair';
import { actionSetFirstInPair } from './actions/actionSetFirstInPair';
import { SECOND_IN_PAIR_SET } from './sets/setSecondInPair';
import { actionSetSecondInPair } from './actions/actionSetSecondInPair';
import { TOKEN_FIRST_IN_PAIR_SET } from './sets/setTokenFirstInPair';
import { actionSetTokenFirstInPair } from './actions/actionSetTokenFirstInPair';
import { TOKEN_SECOND_IN_PAIR_SET } from './sets/setTokenSecondInPair';
import { actionSetTokenSecondInPair } from './actions/actionSetTokenSecondInPair';
import { DEPOSIT_COUNT_IN_FIRST_PAIR_SET } from './sets/setDepositCountInFirstPair';
import { actionSetDepositCountInFirstPair } from './actions/actionSetDepositCountInFirstPair';
import { DEPOSIT_COUNT_IN_SECOND_PAIR_SET } from './sets/setDepositCountInSecondPair';
import { actionSetDepositCountInSecondPair } from './actions/actionSetDepositCountInSecondPair';

export const liquidityReducer = (
  state = liquidityStore,
  action: TLiquiditySets,
): TLiquidityStore => {
  switch (action.type) {
    case ALL_LIQUIDITIES_SET:
      return actionSetAllLiquidities(state, action.data);

    case FIRST_IN_PAIR_SET:
      return actionSetFirstInPair(state, action.data);

    case SECOND_IN_PAIR_SET:
      return actionSetSecondInPair(state, action.data);

    case TOKEN_FIRST_IN_PAIR_SET:
      return actionSetTokenFirstInPair(state, action.data);

    case TOKEN_SECOND_IN_PAIR_SET:
      return actionSetTokenSecondInPair(state, action.data);

    case DEPOSIT_COUNT_IN_FIRST_PAIR_SET:
      return actionSetDepositCountInFirstPair(state, action.data);

    case DEPOSIT_COUNT_IN_SECOND_PAIR_SET:
      return actionSetDepositCountInSecondPair(state, action.data);

    default:
      return state;
  }
}