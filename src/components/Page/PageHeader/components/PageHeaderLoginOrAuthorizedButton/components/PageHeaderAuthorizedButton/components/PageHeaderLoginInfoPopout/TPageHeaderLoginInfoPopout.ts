import { RefObject } from 'react';

export type TPageHeaderLoginInfoPopout = {
  headerRef: RefObject<HTMLDivElement>;
  onClose: () => void;
};
