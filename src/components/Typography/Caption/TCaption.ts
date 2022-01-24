import { HTMLAttributes } from 'react';

export type TCaption = HTMLAttributes<HTMLSpanElement> & {
  weight: 'regular' | 'semibold' | 'bold';
}