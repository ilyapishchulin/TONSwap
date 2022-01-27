import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { requestTokensSend } from 'store/sags/requestTokens/requestTokensSend';

import { ModalRoot } from 'modals/components/ModalRoot/ModalRoot';
import { PagesRoot } from 'pages/components/PagesRoot/PagesRoot';

import { PageHeader } from 'components/Page/PageHeader/PageHeader';
import { PageLayout } from 'components/Page/PageLayout/PageLayout';
import { PageNotificationsRoot } from './components/Page/PageNotificationsRoot/PageNotificationsRoot';

export const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestTokensSend());
  }, [dispatch]);

  return (
    <PageLayout>
      <ModalRoot />
      <PageNotificationsRoot />
      <PageHeader />
      <PagesRoot />
    </PageLayout>
  );
}
