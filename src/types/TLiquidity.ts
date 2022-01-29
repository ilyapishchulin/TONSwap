import { TToken } from './TToken';

export type TLiquidity = {
  id: string;
  liquidityFrom: TToken;
  liquidityTo: TToken;
  size: string;
  volume: string;
  APY: number;
};
