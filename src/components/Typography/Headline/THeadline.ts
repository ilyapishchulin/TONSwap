import { HTMLAttributes } from 'react';

export type THeadline = HTMLAttributes<HTMLHeadElement> & {
  weight: 'semibold' | 'bold';
}