import { setAllLiquidities } from './sets/setAllLiquidities';
import { setFirstInPair } from './sets/setFirstInPair';
import { setSecondInPair } from './sets/setSecondInPair';
import { setTokenSecondInPair } from './sets/setTokenSecondInPair';
import { setTokenFirstInPair } from './sets/setTokenFirstInPair';
import { setDepositCountInFirstPair } from './sets/setDepositCountInFirstPair';
import { setDepositCountInSecondPair } from './sets/setDepositCountInSecondPair';

export type TLiquiditySets = ReturnType<
  | typeof setAllLiquidities
  | typeof setFirstInPair
  | typeof setSecondInPair
  | typeof setTokenFirstInPair
  | typeof setTokenSecondInPair
  | typeof setDepositCountInFirstPair
  | typeof setDepositCountInSecondPair
>;