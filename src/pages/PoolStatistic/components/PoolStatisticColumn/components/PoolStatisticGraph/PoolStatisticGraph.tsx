import { FC } from 'react';
import { useSelector } from 'react-redux';
import './PoolStatisticGraph.css';

import { getHourAndMinutesByUNIX } from 'utils/time';
import { getFormattedCurrency } from 'utils/currency';

import { selectCurrentPool } from 'store/currentPool/selectors/selectCurrentPool';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PoolStatisticGraphCursor } from './components/PoolStatisticGraphCursor/PoolStatisticGraphCursor';

export const PoolStatisticGraph: FC = () => {
  const currentPool = useSelector(selectCurrentPool);
  if (currentPool.graph.length === 0) {
    return null;
  }

  // Temporary variable, should be adaptive service for mobiles with hooks, but now we haven't time for this
  const isMobile = document.body.clientWidth <= 600;
  return (
    <ResponsiveContainer className="PoolStatisticGraph" width="100%" height="100%">
      <AreaChart
        data={currentPool.graph}
        margin={{
          top: 16,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid />
        <XAxis tickFormatter={getHourAndMinutesByUNIX} dataKey="time" />
        {!isMobile && <YAxis tickFormatter={getFormattedCurrency} />}
        <Tooltip cursor={{ stroke: 'var(--stroke_primary)' }} content={<PoolStatisticGraphCursor />} />
        <Area type="monotoneX" dataKey="price" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

