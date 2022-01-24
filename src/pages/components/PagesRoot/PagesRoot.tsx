import { useSelector } from 'react-redux';

import { EPages } from 'enums/EPages';

import { selectActivePage } from 'store/router/selectors/selectActivePage';
import { SwapTokens } from 'pages/SwapTokens/SwapTokens';

export const PagesRoot = () => {
  const activePage = useSelector(selectActivePage);

  let PageComponent = null
  switch (activePage) {
    case EPages.Home:
    case EPages.Swap:
      PageComponent = SwapTokens;
      break;
  }

  if (!PageComponent) {
    return null;
  }

  return <PageComponent />;
}