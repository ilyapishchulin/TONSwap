import { FC } from 'react';
import './PoolsSkeletonCell.css';

import { Skeleton } from 'components/Skeleton/Skeleton';

export const PoolsSkeletonCell: FC = () => (
  <li className="PoolsSkeletonCell">
    <Skeleton className="PoolsSkeletonCell__image" />
    <Skeleton className="PoolsSkeletonCell__image" />
    <div className="PoolsSkeletonCellTitleWrapper">
      <Skeleton className="PoolsSkeletonCellTitle" />
    </div>
    <Skeleton className="PoolsSkeletonCell__column" />
    <Skeleton className="PoolsSkeletonCell__separator" />
    <Skeleton className="PoolsSkeletonCell__column" />
    <Skeleton className="PoolsSkeletonCell__separator" />
    <Skeleton className="PoolsSkeletonCell__column" />
  </li>
);
