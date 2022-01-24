import { FC, memo } from 'react';
import { TSubhead } from './TSubhead';
import './Subhead.css';

import { classNames } from 'utils/classNames';

export const Subhead: FC<TSubhead> = memo(({ className, children, weight }) => (
  <h5 className={classNames('Subhead', {
    [`Subhead--${weight}`]: true,
  }, className)}>
    {children}
  </h5>
));