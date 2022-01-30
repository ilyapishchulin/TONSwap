import { FC, memo } from 'react';
import './PoolStatisticHeaderTab.css';
import { TPoolStatisticHeaderTab } from './TPoolStatisticHeaderTab';

import { classNames } from 'utils/classNames';

import { Text } from 'components/Typography/Text/Text';

export const PoolStatisticHeaderTab: FC<TPoolStatisticHeaderTab> = memo(({ onClick, title, active }) => (
  <div onClick={onClick} className={classNames('PoolStatisticHeaderTab', {
    'PoolStatisticHeaderTab--active': active,
  })}>
    <Text weight="semibold">{title}</Text>
  </div>
));
