import { HTMLAttributes } from 'react';

export type TText = HTMLAttributes<HTMLSpanElement> & {
  weight: 'regular' | 'semibold' | 'bold';
}