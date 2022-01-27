import { FC } from 'react';
import './PageHeader.css';

import { TonLogo } from './components/TonLogo/TonLogo';
import { PageTabs } from './components/PageTabs/PageTabs';
import { LoginOrAuthorizedButton } from './components/LoginOrAuthorizedButton/LoginOrAuthorizedButton';

export const PageHeader: FC = () => (
  <header className="PageHeader">
    <TonLogo />
    <PageTabs />
    <LoginOrAuthorizedButton />
  </header>
);
