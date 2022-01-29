import { FC } from 'react';
import './PoolStatisticHeaderSkeleton.css';

import { router } from 'utils/router';

import { ReactComponent as Icon20CloseOutline } from 'icons/20/close.svg';

import { Skeleton } from 'components/Skeleton/Skeleton';

import { PoolStatisticHeaderTabs } from '../PoolStatisticHeader/components/PoolStatisticHeaderTabs/PoolStatisticHeaderTabs';
import { PoolStatisticHeaderTab } from '../PoolStatisticHeader/components/PoolStatisticHeaderTab/PoolStatisticHeaderTab';

export const PoolStatisticHeaderSkeleton: FC =() => (
  <header className="PoolStatisticHeaderSkeleton">
    <Icon20CloseOutline onClick={router.closePage} className="PoolStatisticHeader__icon" />
    <div className="PoolStatisticHeaderSkeletonStack">
      <Skeleton className="PoolStatisticHeaderSkeletonStack__cover" />
      <Skeleton className="PoolStatisticHeaderSkeletonStack__cover" />
    </div>
    <div className="PoolStatisticHeaderSkeletonFields">
      <Skeleton className="PoolStatisticHeaderSkeletonFields__title" />
      <Skeleton className="PoolStatisticHeaderSkeletonFields__description" />
    </div>
    <PoolStatisticHeaderTabs>
      {['H', 'D', 'W', 'M', 'Y'].map((item, index) => (
        <PoolStatisticHeaderTab key={item} active={index === 0} title={item} />
      ))}
    </PoolStatisticHeaderTabs>
  </header>
);