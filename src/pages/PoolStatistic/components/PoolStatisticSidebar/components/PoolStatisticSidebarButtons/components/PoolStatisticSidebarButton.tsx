import { FC } from 'react';
import { TPoolStatisticSidebarButton } from './TPoolStatisticSidebarButton';
import './PoolStatisticSidebarButton.css';

import { Subhead } from 'components/Typography/Subhead/Subhead';

export const PoolStatisticSidebarButton: FC<TPoolStatisticSidebarButton> = ({ onClick, text, Icon }) => (
  <button className="PoolStatisticSidebarButton" onClick={onClick}>
    <Icon className="PoolStatisticSidebarButton__icon" />
    <Subhead className="PoolStatisticSidebarButton__text" weight="bold">{text}</Subhead>
  </button>
);
