import { TToken } from './TToken';

export type TExchangeData = {
  token?: TToken;
  exchangeCount: string;
  change: number;
  price: number;
}