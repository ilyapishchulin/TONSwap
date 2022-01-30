import { FC } from 'react';
import './PageHeaderTonLogo.css';

import { ReactComponent as Icon32TonLogo } from 'icons/32/ton.svg';
import { Title } from 'components/Typography/Title/Title';

const TON_ORG_LINK = "https://ton.org";

export const PageHeaderTonLogo: FC = () => (
  <a href={TON_ORG_LINK} rel="noreferrer" target="_blank" className="PageHeaderTonLogo">
    <Icon32TonLogo />
    <Title level="3" weight="bold" className="PageHeaderTonLogo__title">TON Swap</Title>
  </a>
);
