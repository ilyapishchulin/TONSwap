import { FC } from 'react';
import { useSelector } from 'react-redux';
import './PoolStatisticSidebarFields.css';

import { selectTokens } from 'store/swap/selectors/selectTokens';

import { PoolStatisticSidebarFiledVolume } from './components/PoolStatisticSidebarFiledVolume/PoolStatisticSidebarFiledVolume';
import { PoolStatisticPoolMakeUp } from './components/PoolStatisticPoolMakeUp/PoolStatisticPoolMakeUp';
import { PoolStatisticPercentage } from './components/PoolStatisticPercentage/PoolStatisticPercentage';

export const PoolStatisticSidebarFields: FC = () => {
  const tokens = useSelector(selectTokens);

  if (tokens.length === 0) {
    return null;
  }

  return (
    <div className="PoolStatisticSidebarFields">
      <PoolStatisticSidebarFiledVolume percents={50} />
      <PoolStatisticPoolMakeUp
        firstToken={tokens[0]}
        firstMakeUp="50%"
        secondToken={tokens[1]}
        secondMakeUp="60%"
      />
      <PoolStatisticPercentage title="Annual Percentage Yield" percent={-90} />
      <PoolStatisticPercentage title="Annualized Fees" percent={32} />
    </div>
  );
}
