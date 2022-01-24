import { HTMLAttributes } from 'react';

export type TPageTab = HTMLAttributes<HTMLDivElement> & {
  text: string;
  isActive?: boolean;
}