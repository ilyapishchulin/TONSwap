import { FC, memo } from 'react';
import { TText } from './TText';
import './Text.css';

import { classNames } from 'utils/classNames';

export const Text: FC<TText> = memo(({ className, children, weight }) => (
  <span className={classNames('Text', {
    [`Text--${weight}`]: true,
  }, className)}>
    {children}
  </span>
));