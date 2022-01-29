import { TAction } from 'store/TAction';

export const DEPOSIT_COUNT_IN_SECOND_PAIR_SET = 'depositCountInSecondPair/set';

export const setDepositCountInSecondPair = (depositCount: string): TAction<typeof DEPOSIT_COUNT_IN_SECOND_PAIR_SET, string> => ({
  type: DEPOSIT_COUNT_IN_SECOND_PAIR_SET,
  data: depositCount,
});
