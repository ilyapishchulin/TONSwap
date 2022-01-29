import { HTMLAttributes } from 'react';

export type TCreateLiquidityFeeTierItem = HTMLAttributes<HTMLDivElement> & {
  number: number;
  active?: boolean;
};
