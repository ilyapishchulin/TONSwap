import { HTMLAttributes } from 'react';

export type TPoolStatisticHeaderTab = HTMLAttributes<HTMLDivElement> & {
  title: string;
  active?: boolean;
};
