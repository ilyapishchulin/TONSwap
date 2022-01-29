import { FC } from 'react';
import './PoolStatisticGraphCursor.css';

import { getFullDateByUNIX } from 'utils/time';
import { getFormattedCurrency } from 'utils/currency';

import { Caption } from 'components/Typography/Caption/Caption';

export const PoolStatisticGraphCursor: FC = ({ active, payload, label }: any ) => {
  if (active && payload && payload.length) {
    return (
      <div className="PoolStatisticGraphCursor">
        <Caption weight="bold" className="PoolStatisticGraphCursor__title">{getFormattedCurrency(payload[0].value)}</Caption>
        <Caption weight="semibold" className="PoolStatisticGraphCursor__description">{getFullDateByUNIX(label)}</Caption>
      </div>
    );
  }

  return null;
};