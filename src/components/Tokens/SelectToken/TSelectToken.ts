import { HTMLAttributes, MouseEventHandler } from 'react';
import { TToken } from 'types/TToken';

export type TSelectToken = HTMLAttributes<HTMLDivElement> & {
  token?: TToken;
  onSelectedToken?: MouseEventHandler<HTMLDivElement>;
};
