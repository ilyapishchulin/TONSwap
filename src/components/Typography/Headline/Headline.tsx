import { FC, memo } from 'react';
import { THeadline } from './THeadline';
import './Headline.css';

import { classNames } from 'utils/classNames';

export const Headline: FC<THeadline> = memo(({ className, children, weight }) => (
  <h5 className={classNames('Headline', {
    [`Headline--${weight}`]: true,
  }, className)}>
    {children}
  </h5>
));