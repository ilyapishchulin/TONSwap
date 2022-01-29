import { FC } from 'react';
import { useSelector } from 'react-redux';
import './PoolStatisticHeader.css';

import { router } from 'utils/router';
import { ETokenImages } from 'enums/ETokenImages';
import { selectTokens } from 'store/swap/selectors/selectTokens';

import { ReactComponent as Icon20CloseOutline } from 'icons/20/close.svg';

import { TokenStack } from 'components/Tokens/TokenStack/TokenStack';
import { Title } from 'components/Typography/Title/Title';
import { Subhead } from 'components/Typography/Subhead/Subhead';
import { PoolStatisticHeaderTabs } from './components/PoolStatisticHeaderTabs/PoolStatisticHeaderTabs';
import { PoolStatisticHeaderTab } from './components/PoolStatisticHeaderTab/PoolStatisticHeaderTab';

export const PoolStatisticHeader: FC = () => {
  const tokens = useSelector(selectTokens);

  if (tokens.length === 0) {
    return null;
  }

  return (
    <header className="PoolStatisticHeader">
      <Icon20CloseOutline onClick={router.closePage} className="PoolStatisticHeader__icon" />
      <TokenStack firstToken={tokens[0]} secondToken={tokens[1]} size={ETokenImages.BIG} />
      <div className="PoolStatisticHeaderFields">
        <Title className="PoolStatisticHeaderFields__volume" level="2" weight="extrabold">$312,435,813</Title>
        <Subhead className="PoolStatisticHeaderFields__tickers" weight="semibold">Ton-WBtc</Subhead>
      </div>
      <PoolStatisticHeaderTabs>
        <PoolStatisticHeaderTab active title="T" />
        <PoolStatisticHeaderTab title="M" />
        <PoolStatisticHeaderTab title="Y" />
      </PoolStatisticHeaderTabs>
    </header>
  );
}
