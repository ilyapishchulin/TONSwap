import { FC, HTMLAttributes } from 'react';

export type TPageHeaderLoginInfoPopoutCell = HTMLAttributes<HTMLDivElement> & {
  Icon: FC<HTMLAttributes<HTMLOrSVGElement>>;
  text: string;
};
