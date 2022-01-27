import { HTMLAttributes } from 'react';

export type TSwapConfirmationButton = HTMLAttributes<HTMLButtonElement> & {
  mode: 'cancel' | 'confirm',
};
