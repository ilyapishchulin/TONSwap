import { FC } from 'react';
import './PoolStatisticSidebar.css';

import { PoolStatisticSidebarButtons } from './components/PoolStatisticSidebarButtons/PoolStatisticSidebarButtons';
import { PoolStatisticSidebarFields } from './components/PoolStatisticSidebarFields/PoolStatisticSidebarFields';

export const PoolStatisticSidebar: FC = () => (
  <aside className="PoolStatisticSidebar">
    <PoolStatisticSidebarButtons />
    <PoolStatisticSidebarFields />
  </aside>
);
