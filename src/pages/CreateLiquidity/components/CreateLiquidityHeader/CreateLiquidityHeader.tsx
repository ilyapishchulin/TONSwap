import { FC } from 'react';
import './CreateLiquidityHeader.css';

import { router } from 'utils/router';

import { ReactComponent as Icon16CloseOutline } from 'icons/16/close.svg';
import { Title } from 'components/Typography/Title/Title';

export const CreateLiquidityHeader: FC = () => (
  <header className="CreateLiquidityHeader">
    <Icon16CloseOutline onClick={router.closePage} className="CreateLiquidityHeader__icon" />
    <Title className="CreateLiquidityHeader__text" level="2" weight="extrabold">Add Liquidity</Title>
  </header>
);
