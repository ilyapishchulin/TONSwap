import { FC, memo } from 'react';
import { TPoolStatisticSidebarFiledVolume } from './TPoolStatisticSidebarFiledVolume';
import './PoolStatisticSidebarFiledVolume.css';

import { classNames } from 'utils/classNames';

import { PoolStatisticSidebarFieldGroup } from '../PoolStatisticSidebarFiledGroup/PoolStatisticSidebarFieldGroup';

import { Title } from 'components/Typography/Title/Title';
import { Subhead } from 'components/Typography/Subhead/Subhead';

export const PoolStatisticSidebarFiledVolume: FC<TPoolStatisticSidebarFiledVolume> = memo(({ percents }) => (
  <PoolStatisticSidebarFieldGroup title="24H Volume">
    <Title className="PoolStatisticSidebarFiledVolume__title" level="3" weight="bold">$4,116,627</Title>
    <Subhead className={classNames('PoolStatisticSidebarFiledVolume__percents', {
      [`PoolStatisticSidebarFiledVolume__percents--${percents > 0 ? 'positive' : 'negative'}`]: true
    })} weight="bold">+41.45 (5.15%)</Subhead>
  </PoolStatisticSidebarFieldGroup>
));
