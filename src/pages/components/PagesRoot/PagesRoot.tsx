import { useSelector } from 'react-redux';

import { EPages } from 'enums/EPages';

import { selectActivePage } from 'store/router/selectors/selectActivePage';
import { Home } from 'pages/Home/Home';

export const PagesRoot = () => {
  const activePage = useSelector(selectActivePage);

  let PageComponent = null
  switch (activePage) {
    case EPages.Home:
      PageComponent = Home;
      break;
  }

  if (!PageComponent) {
    return null;
  }

  return (
    <div className="PagesRoot">
      <PageComponent />
    </div>
  );
}