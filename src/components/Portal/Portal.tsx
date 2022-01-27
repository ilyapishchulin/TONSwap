import { FC } from 'react';
import { createPortal } from 'react-dom';
import { TPortal } from './TPortal';

export const Portal: FC<TPortal> = ({ children, ...props }) => {
  return createPortal(<div {...props}>{children}</div>, document.querySelector('body') as HTMLBodyElement);
};
