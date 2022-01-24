import { HTMLAttributes } from 'react';

export type TTitle = HTMLAttributes<HTMLHeadElement> & {
  level: '1' | '2' | '3',
  weight: 'semibold' | 'bold' | 'extrabold',
};
