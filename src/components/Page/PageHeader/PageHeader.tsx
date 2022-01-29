import { FC } from 'react';
import './PageHeader.css';

import { PageHeaderTonLogo } from './components/PageHeaderTonLogo/PageHeaderTonLogo';
import { PageHeaderTabs } from './components/PageHeaderTabs/PageHeaderTabs';
import { PageHeaderLoginOrAuthorizedButton } from './components/PageHeaderLoginOrAuthorizedButton/PageHeaderLoginOrAuthorizedButton';

export const PageHeader: FC = () => (
  <header className="PageHeader">
    <PageHeaderTonLogo />
    <PageHeaderTabs />
    <PageHeaderLoginOrAuthorizedButton />
  </header>
);
