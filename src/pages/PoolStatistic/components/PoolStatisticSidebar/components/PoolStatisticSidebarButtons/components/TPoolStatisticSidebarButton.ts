import { FC, HTMLAttributes } from 'react';

export type TPoolStatisticSidebarButton = HTMLAttributes<HTMLButtonElement> & {
  text: string;
  Icon: FC<HTMLAttributes<HTMLOrSVGElement>>;
};
