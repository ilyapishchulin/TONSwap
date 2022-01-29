import { FC } from 'react';
import { useSelector } from 'react-redux';
import './PoolStatisticHeader.css';

import { router } from 'utils/router';
import { ETokenImages } from 'enums/ETokenImages';

import { selectCurrentPool } from 'store/currentPool/selectors/selectCurrentPool';
import { ReactComponent as Icon20CloseOutline } from 'icons/20/close.svg';

import { TokenStack } from 'components/Tokens/TokenStack/TokenStack';
import { Title } from 'components/Typography/Title/Title';
import { Subhead } from 'components/Typography/Subhead/Subhead';

import { PoolStatisticHeaderTabs } from './components/PoolStatisticHeaderTabs/PoolStatisticHeaderTabs';
import { PoolStatisticHeaderTab } from './components/PoolStatisticHeaderTab/PoolStatisticHeaderTab';

import { PoolStatisticHeaderSkeleton } from '../PoolStatsticHeaderSkeleton/PoolStatisticHeaderSkeleton';

export const PoolStatisticHeader: FC = () => {
  const currentPool = useSelector(selectCurrentPool);

  if (!currentPool.firstPoolToken  || !currentPool.secondPoolToken) {
    return <PoolStatisticHeaderSkeleton />;
  }

  return (
    <header className="PoolStatisticHeader">
      <Icon20CloseOutline onClick={router.closePage} className="PoolStatisticHeader__icon" />
      <TokenStack firstToken={currentPool.firstPoolToken} secondToken={currentPool.secondPoolToken} size={ETokenImages.BIG} />
      <div className="PoolStatisticHeaderFields">
        <Title className="PoolStatisticHeaderFields__volume" level="2" weight="extrabold">{currentPool.volume}</Title>
        <Subhead className="PoolStatisticHeaderFields__tickers" weight="semibold">{currentPool.firstPoolToken.ticker}-{currentPool.secondPoolToken.ticker}</Subhead>
      </div>
      <PoolStatisticHeaderTabs>
        <PoolStatisticHeaderTab active title="T" />
        <PoolStatisticHeaderTab title="M" />
        <PoolStatisticHeaderTab title="Y" />
      </PoolStatisticHeaderTabs>
    </header>
  );
}
