import { HTMLAttributes } from 'react';

export type TSubhead = HTMLAttributes<HTMLHeadElement> & {
  weight: 'medium' | 'semibold' | 'bold';
}