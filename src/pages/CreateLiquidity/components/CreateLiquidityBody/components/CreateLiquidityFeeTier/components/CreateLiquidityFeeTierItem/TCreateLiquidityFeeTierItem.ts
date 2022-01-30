import { HTMLAttributes } from 'react';
import { EFeeTiers } from 'enums/EFeeTiers';

export type TCreateLiquidityFeeTierItem = HTMLAttributes<HTMLDivElement> & {
  number: EFeeTiers;
  active?: boolean;
};
