import { setFeeTier } from './sets/setFeeTier';
import { setDurationLimit } from './sets/setDurationLimit';
import { setSlippageTolerance } from './sets/setSlippageTolerance';

export type TSettingsSets = ReturnType<
  | typeof setFeeTier
  | typeof setDurationLimit
  | typeof setSlippageTolerance
>;