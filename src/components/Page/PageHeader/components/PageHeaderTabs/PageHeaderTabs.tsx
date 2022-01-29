import { FC } from 'react';
import { useSelector } from 'react-redux';
import './PageHeaderTabs.css';

import { EPages } from 'enums/EPages';
import { router } from 'utils/router';
import { selectActivePage } from 'store/router/selectors/selectActivePage';

import { PageHeaderTab } from './components/PageTab/PageHeaderTab';

export const PageHeaderTabs: FC = () => {
  const activePage = useSelector(selectActivePage);

  return (
    <div className="PageHeaderTabs">
      <PageHeaderTab onClick={() => router.openPage(EPages.SWAP)} isActive={[EPages.HOME, EPages.SWAP].includes(activePage)} text="Swap" />
      <PageHeaderTab onClick={() => router.openPage(EPages.POOLS)} isActive={[EPages.POOLS, EPages.CREATE_LIQUIDITY, EPages.POOL_STATISTIC].includes(activePage)} text="Pools" />
    </div>
  );
}
