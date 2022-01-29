import { HTMLAttributes } from 'react';

export type TPageHeaderTab = HTMLAttributes<HTMLDivElement> & {
  text: string;
  isActive?: boolean;
}