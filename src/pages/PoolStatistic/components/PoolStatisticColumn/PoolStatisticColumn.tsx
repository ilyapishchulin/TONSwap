import { FC } from 'react';
import './PoolStatisticColumn.css';

import { ReactComponent as GraphMask } from 'icons/graphMask.svg';

import { PoolStatisticHeader } from './components/PoolStatisticHeader/PoolStatisticHeader';
import { PoolStatisticGraph } from './components/PoolStatisticGraph/PoolStatisticGraph';

export const PoolStatisticColumn: FC = () => (
  <section className="PoolStatisticColumn">
    <GraphMask />
    <PoolStatisticHeader />
    <PoolStatisticGraph />
  </section>
);
