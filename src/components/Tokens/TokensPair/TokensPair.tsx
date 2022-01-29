import { FC, memo } from 'react';
import { TTokensPair } from './TTokensPair';
import './TokensPair.css';

import { classNames } from 'utils/classNames';

import { ReactComponent as Icon20LinkOutline } from 'icons/20/link.svg';
import { TokensPairLabel } from './components/TokensPairLabel/TokensPairLabel';

export const TokensPair: FC<TTokensPair> = memo(({ onChangeFirstPair, onChangeSecondPair, className, firstInPair, secondInPair }) => (
  <div className={classNames('TokensPair', className)}>
    <TokensPairLabel onChange={onChangeFirstPair} pairData={firstInPair} />
    <div className="TokensPair__icon">
      <Icon20LinkOutline />
    </div>
    <TokensPairLabel onChange={onChangeSecondPair} pairData={secondInPair} />
  </div>
));
