import { FC } from 'react';

import { ReactComponent as MasksEffects } from 'icons/masks.svg';
import { FullCentredLayout } from 'pages/components/Layouts/FullCentredLayout/FullCentredLayout';

import { PoolStatisticColumn } from './components/PoolStatisticColumn/PoolStatisticColumn';
import { PoolStatisticSidebar } from './components/PoolStatisticSidebar/PoolStatisticSidebar';

export const PoolStatistic: FC = () => (
  <FullCentredLayout>
    <MasksEffects />
    <PoolStatisticColumn />
    <PoolStatisticSidebar />
  </FullCentredLayout>
);
