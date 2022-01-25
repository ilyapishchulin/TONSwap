import { TToken } from 'types/TToken';

export type TTokenInput = {
  onSelectedToken: () => void;
  token?: TToken;
  balance?: string;
}