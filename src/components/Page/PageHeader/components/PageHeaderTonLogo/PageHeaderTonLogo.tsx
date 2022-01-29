import { FC } from 'react';
import './PageHeaderTonLogo.css';

import { ReactComponent as Icon32TonLogo } from 'icons/32/ton.svg';
import { Title } from 'components/Typography/Title/Title';

export const PageHeaderTonLogo: FC = () => (
  <div className="PageHeaderTonLogo">
    <Icon32TonLogo />
    <Title level="3" weight="bold" className="PageHeaderTonLogo__title">TON Swap</Title>
  </div>
);
