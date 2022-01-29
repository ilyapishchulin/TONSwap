import { TCurrentPoolStore } from './TCurrentPoolStore';

export const currentPoolStore: TCurrentPoolStore = {
  graphs: [],
  volume: '',
  dayVolume: '',
  dayVolumeDiff: '',
  selectedTimeGraph: '',
  firstPoolToken: undefined, // Set default undefined value for spread in clearState
  secondPoolToken: undefined,
  firstPoolMakeup: '',
  secondPoolMakeup: '',
  annualizedFees: 0,
  annualPercentageYield: 0,
};
