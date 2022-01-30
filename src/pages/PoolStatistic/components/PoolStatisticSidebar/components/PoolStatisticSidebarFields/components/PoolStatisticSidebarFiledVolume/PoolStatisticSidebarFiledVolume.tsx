import { FC, memo } from 'react';
import { TPoolStatisticSidebarFiledVolume } from './TPoolStatisticSidebarFiledVolume';
import './PoolStatisticSidebarFiledVolume.css';

import { classNames } from 'utils/classNames';
import { getFormattedCurrency } from 'utils/currency';

import { PoolStatisticSidebarFieldGroup } from '../PoolStatisticSidebarFiledGroup/PoolStatisticSidebarFieldGroup';

import { Title } from 'components/Typography/Title/Title';
import { Subhead } from 'components/Typography/Subhead/Subhead';

export const PoolStatisticSidebarFiledVolume: FC<TPoolStatisticSidebarFiledVolume> = memo(({ volume, volumeDiff }) => (
  <PoolStatisticSidebarFieldGroup title="24H Volume">
    <Title className="PoolStatisticSidebarFiledVolume__title" level="3" weight="bold">{getFormattedCurrency(volume)}</Title>
    <Subhead className={classNames('PoolStatisticSidebarFiledVolume__percents', {
      [`PoolStatisticSidebarFiledVolume__percents--${volumeDiff > 0 ? 'positive' : 'negative'}`]: true
    })} weight="bold">{volumeDiff > 0 ? '+' : ''}{volumeDiff} ({(volumeDiff * 100 / volume).toFixed(3).replace('-', '')}%)</Subhead>
  </PoolStatisticSidebarFieldGroup>
));
