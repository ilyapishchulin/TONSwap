import { FC } from 'react';
import './PoolsSkeletons.css';

import { Skeleton } from 'components/Skeleton/Skeleton';
import { PoolsSkeletonCell } from './PoolsSkeletonCell/PoolsSkeletonCell';

const SKELETONS_COUNT = 6;

export const PoolsSkeletons: FC = () => (
  <>
    <Skeleton className="PoolsSkeletonsTitle" />
    <ul className="PoolsSkeletons">
      {new Array(SKELETONS_COUNT).fill(0).map((_, index) => <PoolsSkeletonCell key={index} />)}
    </ul>
  </>
);
