import { TCurrentPoolStore } from './TCurrentPoolStore';
import { EGraphIntervals } from 'enums/EGraphIntervals';

export const currentPoolStore: TCurrentPoolStore = {
  graph: [],
  graphInterval: EGraphIntervals.HOUR,
  volume: '',
  dayVolume: 0,
  dayVolumeDiff: 0,
  firstPoolToken: undefined, // Set default undefined value for spread in clearState
  secondPoolToken: undefined,
  firstPoolMakeup: '',
  secondPoolMakeup: '',
  annualizedFees: 0,
  annualPercentageYield: 0,
};
