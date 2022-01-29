import { FC } from 'react';
import { TSkeleton } from './TSkeleton';
import './Skeleton.css';

import { classNames } from 'utils/classNames';

export const Skeleton: FC<TSkeleton> = ({ className, children }) => (
  <div className={classNames('Skeleton', className)}>
    {children}
  </div>
);
