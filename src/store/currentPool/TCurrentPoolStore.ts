import { TToken } from 'types/TToken';
import { TGraph } from 'types/TGraph';
import { EGraphIntervals } from 'enums/EGraphIntervals';

export type TCurrentPoolStore = {
  volume: string;
  dayVolume: number;
  dayVolumeDiff: number;
  firstPoolToken?: TToken;
  secondPoolToken?: TToken;
  graphInterval: EGraphIntervals;
  firstPoolMakeup: string;
  secondPoolMakeup: string;
  annualPercentageYield: number;
  annualizedFees: number;
  graph: TGraph[];
};
