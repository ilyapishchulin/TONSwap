import { FC } from 'react';
import { useSelector } from 'react-redux';
import './PoolStatisticSidebarFields.css';

import { selectCurrentPool } from 'store/currentPool/selectors/selectCurrentPool';

import { PoolStatisticSidebarFiledVolume } from './components/PoolStatisticSidebarFiledVolume/PoolStatisticSidebarFiledVolume';
import { PoolStatisticPoolMakeUp } from './components/PoolStatisticPoolMakeUp/PoolStatisticPoolMakeUp';
import { PoolStatisticPercentage } from './components/PoolStatisticPercentage/PoolStatisticPercentage';
import { PoolStatisticSidebarFieldsSkeletons } from './components/PoolStatisticSidebarFieldsSkeletons/PoolStatisticSidebarFieldsSkeletons';

export const PoolStatisticSidebarFields: FC = () => {
  const currentPool = useSelector(selectCurrentPool);

  if (!currentPool.firstPoolToken || !currentPool.secondPoolToken) {
    return <PoolStatisticSidebarFieldsSkeletons />;
  }

  return (
    <div className="PoolStatisticSidebarFields">
      <PoolStatisticSidebarFiledVolume volume={currentPool.dayVolume} volumeDiff={currentPool.dayVolumeDiff} />
      <PoolStatisticPoolMakeUp
        firstToken={currentPool.firstPoolToken}
        firstMakeUp={currentPool.firstPoolMakeup}
        secondToken={currentPool.secondPoolToken}
        secondMakeUp={currentPool.secondPoolMakeup}
      />
      <PoolStatisticPercentage title="Annual Percentage Yield" percent={currentPool.annualPercentageYield} />
      <PoolStatisticPercentage title="Annualized Fees" percent={currentPool.annualizedFees} />
    </div>
  );
}
