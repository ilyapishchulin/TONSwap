import { MouseEventHandler } from 'react';

export type TSelectToken = {
  ticker?: string;
  imageSrc?: string;
  imageSrcSet?: string;
  onSelectedToken: MouseEventHandler<HTMLDivElement>;
};
