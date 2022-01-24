import { FC } from 'react';
import './PageHeader.css';

import { TonLogo } from './components/TonLogo/TonLogo';
import { PageTabs } from './components/PageTabs/PageTabs';
import { LoginButton } from './components/LoginButton/LoginButton';

export const PageHeader: FC = () => (
  <header className="PageHeader">
    <TonLogo />
    <PageTabs />
    <LoginButton />
  </header>
);
