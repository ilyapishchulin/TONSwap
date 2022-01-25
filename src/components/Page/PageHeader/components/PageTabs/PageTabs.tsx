import { FC } from 'react';
import { useSelector } from 'react-redux';
import './PageTabs.css';

import { EPages } from 'enums/EPages';
import { router } from 'utils/router';
import { selectActivePage } from 'store/router/selectors/selectActivePage';

import { PageTab } from './components/PageTab/PageTab';

export const PageTabs: FC = () => {
  const activePage = useSelector(selectActivePage);

  return (
    <div className="PageTabs">
      <PageTab onClick={() => router.openPage(EPages.SWAP)} isActive={[EPages.HOME, EPages.SWAP].includes(activePage)} text="Swap" />
      <PageTab onClick={() => router.openPage(EPages.POOLS)} isActive={activePage === EPages.POOLS} text="Pools" />
    </div>
  );
}
