import { FC } from 'react';
import { TPoolStatisticSidebarFieldGroup } from './TPoolStatisticSidebarFieldGroup';
import './PoolStatisticSidebarFieldGroup.css';

import { Caption } from 'components/Typography/Caption/Caption';

export const PoolStatisticSidebarFieldGroup: FC<TPoolStatisticSidebarFieldGroup> = ({ title, children }) => (
  <section className="PoolStatisticSidebarFieldGroup">
    <Caption className="PoolStatisticSidebarFieldGroup__title" weight="bold">{title}</Caption>
    {children}
  </section>
);
