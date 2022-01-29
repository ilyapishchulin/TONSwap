import { TToken } from 'types/TToken';
import { TGraph } from 'types/TGraph';

export type TCurrentPoolStore = {
  volume: string;
  dayVolume: string;
  dayVolumeDiff: string;
  firstPoolToken?: TToken;
  secondPoolToken?: TToken;
  selectedTimeGraph: string;
  firstPoolMakeup: string;
  secondPoolMakeup: string;
  annualPercentageYield: number;
  annualizedFees: number;
  graphs: TGraph[];
};
