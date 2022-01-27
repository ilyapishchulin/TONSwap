import { FC, HTMLAttributes } from 'react';

export type TSnackbar = HTMLAttributes<HTMLDivElement> & {
  Icon: FC;
  iconClass: string;
  title: string;
  description: string;
}