import { setCurrentPool } from './sets/setCurrentPool';
import { clearCurrentPool } from './sets/clearCurrentPool';
import { setGraphInterval } from './sets/setGraphInterval';
import { setGraph } from './sets/setGraph';

export type TCurrentPoolSets = ReturnType<
  | typeof setCurrentPool
  | typeof clearCurrentPool
  | typeof setGraphInterval
  | typeof setGraph
>;
