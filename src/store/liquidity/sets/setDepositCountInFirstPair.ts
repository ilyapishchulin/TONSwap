import { TAction } from 'store/TAction';

export const DEPOSIT_COUNT_IN_FIRST_PAIR_SET = 'depositCountInFirstPair/set';

export const setDepositCountInFirstPair = (depositCount: string): TAction<typeof DEPOSIT_COUNT_IN_FIRST_PAIR_SET, string> => ({
  type: DEPOSIT_COUNT_IN_FIRST_PAIR_SET,
  data: depositCount,
});
