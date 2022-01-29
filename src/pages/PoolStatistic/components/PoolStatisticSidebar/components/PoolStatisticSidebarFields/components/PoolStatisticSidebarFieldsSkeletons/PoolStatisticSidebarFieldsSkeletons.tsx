import { FC } from 'react';
import './PoolStatisticSidebarFieldsSkeletons.css';

import { PoolStatisticSidebarFieldGroup } from '../PoolStatisticSidebarFiledGroup/PoolStatisticSidebarFieldGroup';

import { Skeleton } from 'components/Skeleton/Skeleton';

export const PoolStatisticSidebarFieldsSkeletons: FC = () => (
  <div className="PoolStatisticSidebarFieldsSkeletons">
    <PoolStatisticSidebarFieldGroup title="24H Volume">
      <Skeleton className="PoolStatisticSidebarFieldsSkeletons__title" />
      <Skeleton className="PoolStatisticSidebarFieldsSkeletons__description" />
    </PoolStatisticSidebarFieldGroup>
    <PoolStatisticSidebarFieldGroup title="Pool Makeup">
      <div className="PoolStatisticSidebarFieldsSkeletonsPool">
        <Skeleton className="PoolStatisticSidebarFieldsSkeletonsPool__circle" />
        <Skeleton className="PoolStatisticSidebarFieldsSkeletonsPool__title" />
        <Skeleton className="PoolStatisticSidebarFieldsSkeletonsPool__title" />
      </div>
      <div className="PoolStatisticSidebarFieldsSkeletonsPool">
        <Skeleton className="PoolStatisticSidebarFieldsSkeletonsPool__circle" />
        <Skeleton className="PoolStatisticSidebarFieldsSkeletonsPool__title" />
        <Skeleton className="PoolStatisticSidebarFieldsSkeletonsPool__title" />
      </div>
    </PoolStatisticSidebarFieldGroup>
    <PoolStatisticSidebarFieldGroup title="Annual Percentage Yield">
      <Skeleton className="PoolStatisticSidebarFieldsSkeletons__title" />
    </PoolStatisticSidebarFieldGroup>
    <PoolStatisticSidebarFieldGroup title="Annualized Fees">
      <Skeleton className="PoolStatisticSidebarFieldsSkeletons__title" />
    </PoolStatisticSidebarFieldGroup>
  </div>
);
