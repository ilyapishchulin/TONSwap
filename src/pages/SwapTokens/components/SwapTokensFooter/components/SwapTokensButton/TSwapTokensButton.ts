import { HTMLAttributes } from 'react';

export type TSwapTokensButton = HTMLAttributes<HTMLButtonElement> & {
  name: string;
  disabled: boolean;
};