import { TToken } from 'types/TToken';
import { TCountingFields } from './components/CountingFields/TCountingFields';
import { MouseEventHandler } from 'react';

export type TTokenInput = TCountingFields & {
  onExchangeCountChange: (exchangeCount: string) => void;
  token?: TToken;
  exchangeCount: string;
  onSelectedToken: MouseEventHandler<HTMLDivElement>;
}