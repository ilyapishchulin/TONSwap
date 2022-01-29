import { FC } from 'react';
import { TPoolStatisticPoolMakeUpCell } from './TPoolStatisticPoolMakeUpCell';
import './PoolStatisticPoolMakeUpCell.css';

import { ETokenImages } from 'enums/ETokenImages';

import { Headline } from 'components/Typography/Headline/Headline';

export const PoolStatisticPoolMakeUpCell: FC<TPoolStatisticPoolMakeUpCell> = ({ token, makeUp }) => (
  <div className="PoolStatisticPoolMakeUpCell">
    <img
      alt="Token cover"
      className="PoolStatisticPoolMakeUpCell__image"
      src={token.images[ETokenImages.MEDIUM]}
      srcSet={`${token.images[ETokenImages.MEDIUM]}, ${token.images[ETokenImages.MEDIUM_RETINA]} 2x`}
    />
    <Headline className="PoolStatisticPoolMakeUpCell__text" weight="bold">{token.ticker}</Headline>
    <Headline className="PoolStatisticPoolMakeUpCell__percent" weight="bold">{makeUp}</Headline>
  </div>
);
