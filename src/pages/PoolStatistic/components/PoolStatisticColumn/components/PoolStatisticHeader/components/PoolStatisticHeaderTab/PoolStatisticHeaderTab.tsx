import { FC, memo } from 'react';
import './PoolStatisticHeaderTab.css';
import { TPoolStatisticHeaderTab } from './TPoolStatisticHeaderTab';

import { classNames } from 'utils/classNames';

import { Text } from 'components/Typography/Text/Text';

export const PoolStatisticHeaderTab: FC<TPoolStatisticHeaderTab> = memo(({ title, active }) => (
  <div className={classNames('PoolStatisticHeaderTab', {
    'PoolStatisticHeaderTab--active': active,
  })}>
    <Text weight="semibold">{title}</Text>
  </div>
));
