import { FC, memo } from 'react';
import { TPoolStatisticPoolMakeUp } from './TPoolStatisticPoolMakeUp';

import { PoolStatisticSidebarFieldGroup } from '../PoolStatisticSidebarFiledGroup/PoolStatisticSidebarFieldGroup';
import { PoolStatisticPoolMakeUpCell } from './components/PoolStatisticPoolMakeUpCell/PoolStatisticPoolMakeUpCell';

export const PoolStatisticPoolMakeUp: FC<TPoolStatisticPoolMakeUp> = memo(({
  firstToken,
  firstMakeUp,
  secondToken,
  secondMakeUp,
}) => (
  <PoolStatisticSidebarFieldGroup title="Pool Makeup">
    <PoolStatisticPoolMakeUpCell token={firstToken} makeUp={firstMakeUp} />
    <PoolStatisticPoolMakeUpCell token={secondToken} makeUp={secondMakeUp} />
  </PoolStatisticSidebarFieldGroup>
));
