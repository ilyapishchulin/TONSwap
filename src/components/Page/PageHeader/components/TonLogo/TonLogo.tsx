import { FC } from 'react';
import './TonLogo.css';

import { ReactComponent as Logo } from 'icons/32/ton.svg';
import { Title } from 'components/Typography/Title/Title';

export const TonLogo: FC = () => (
  <div className="TonLogo">
    <Logo />
    <Title level="3" weight="bold" className="TonLogo__title">TON Swap</Title>
  </div>
);
