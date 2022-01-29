import { useSelector } from 'react-redux';

import { EPages } from 'enums/EPages';

import { selectActivePage } from 'store/router/selectors/selectActivePage';

import { SwapTokens } from 'pages/SwapTokens/SwapTokens';
import { PoolsPage } from 'pages/PoolsPage/PoolsPage';
import { CreateLiquidity } from 'pages/CreateLiquidity/CreateLiquidity';
import { PoolStatistic } from '../../PoolStatistic/PoolStatistic';

export const PagesRoot = () => {
  const activePage = useSelector(selectActivePage);

  let PageComponent = null
  switch (activePage) {
    case EPages.HOME:
    case EPages.SWAP:
      PageComponent = SwapTokens;
      break;

    case EPages.POOLS:
      PageComponent = PoolsPage;
      break;

    case EPages.CREATE_LIQUIDITY:
      PageComponent = CreateLiquidity;
      break;

    case EPages.POOL_STATISTIC:
      PageComponent = PoolStatistic;
      break;
  }

  if (!PageComponent) {
    return null;
  }

  return <PageComponent />;
}