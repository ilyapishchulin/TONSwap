import { FC, HTMLAttributes } from 'react';

export type TLiquidityPlaceholder = HTMLAttributes<HTMLButtonElement> & {
  Icon: FC<HTMLAttributes<HTMLOrSVGElement>>;
  buttonText: string;
  placeholderText: string;
};
