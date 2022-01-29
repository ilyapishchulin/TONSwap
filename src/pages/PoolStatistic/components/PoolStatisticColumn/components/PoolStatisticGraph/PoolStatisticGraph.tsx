import { FC } from 'react';
import './PoolStatisticGraph.css';

import { getHourAndMinutesByUNIX } from 'utils/time';
import { getFormattedCurrency } from 'utils/currency';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PoolStatisticGraphCursor } from './components/PoolStatisticGraphCursor/PoolStatisticGraphCursor';

const data = [
  {
    time: 1643486052,
    price: 200,
  },
  {
    time: 1643485052,
    price: 700,
  },
  {
    time: 1643484052,
    price: 900,
  },
  {
    time: 1643483052,
    price: 567,
  },
  {
    time: 1643482052,
    price: 1242,
  },
  {
    time: 1643481052,
    price: 567,
  },
  {
    time: 1643480052,
    price: 300,
  },
];

export const PoolStatisticGraph: FC = () => (
  <ResponsiveContainer className="PoolStatisticGraph" width="100%" height="100%">
    <AreaChart
      data={data}
      margin={{
        top: 16,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid />
      <XAxis tickFormatter={getHourAndMinutesByUNIX} dataKey="time" />
      <YAxis tickFormatter={getFormattedCurrency} />
      <Tooltip content={<PoolStatisticGraphCursor />} />
      <Area isAnimationActive={false} type="monotoneX" dataKey="price" />
    </AreaChart>
  </ResponsiveContainer>
);
