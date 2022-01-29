import { setCurrentPool } from './sets/setCurrentPool';
import { clearCurrentPool } from './sets/clearCurrentPool';

export type TCurrentPoolSets = ReturnType<
  | typeof setCurrentPool
  | typeof clearCurrentPool
>;
