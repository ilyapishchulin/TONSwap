import { FC, memo } from 'react';
import { TCaption } from './TCaption';
import './Caption.css';

import { classNames } from 'utils/classNames';

export const Caption: FC<TCaption> = memo(({ className, children, weight }) => (
  <span className={classNames('Caption', {
    [`Caption--${weight}`]: true,
  }, className)}>
    {children}
  </span>
));