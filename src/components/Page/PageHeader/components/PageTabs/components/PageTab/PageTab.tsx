import { FC, memo } from 'react';
import { TPageTab } from './TPageTab';
import './PageTab.css';

import { classNames } from 'utils/classNames';
import { Text } from 'components/Typography/Text/Text';

export const PageTab: FC<TPageTab> = memo(({ onClick, isActive, text }) => (
  <div onClick={onClick} className={classNames('PageTab', {
    'PageTab--active': isActive,
  })}>
    <Text weight="semibold">{text}</Text>
  </div>
));
