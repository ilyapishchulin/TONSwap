import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { requestTokens } from 'requests/requestTokens/requestTokens';
import { setTokens } from 'store/swap/sets/setTokens';

import { ModalRoot } from 'modals/components/ModalRoot/ModalRoot';
import { PagesRoot } from 'pages/components/PagesRoot/PagesRoot';

import { PageHeader } from 'components/Page/PageHeader/PageHeader';
import { PageLayout } from 'components/Page/PageLayout/PageLayout';

export const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Load tokens only on first render
    requestTokens().then((data) => {
      dispatch(setTokens(data.response));
    })
  }, [dispatch]);

  return (
    <PageLayout>
      <ModalRoot />
      <PageHeader />
      <PagesRoot />
    </PageLayout>
  );
}
