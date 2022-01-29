import { FC, memo } from 'react';
import { TPageHeaderTab } from './TPageHeaderTab';
import './PageHeaderTab.css';

import { classNames } from 'utils/classNames';
import { Text } from 'components/Typography/Text/Text';

export const PageHeaderTab: FC<TPageHeaderTab> = memo(({ onClick, isActive, text }) => (
  <div onClick={onClick} className={classNames('PageHeaderTab', {
    'PageHeaderTab--active': isActive,
  })}>
    <Text weight="semibold">{text}</Text>
  </div>
));
