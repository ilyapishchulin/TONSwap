import { FC } from 'react';

import { ModalRoot } from 'modals/components/ModalRoot/ModalRoot';
import { PagesRoot } from 'pages/components/PagesRoot/PagesRoot';

import { PageHeader } from 'components/Page/PageHeader/PageHeader';
import { PageLayout } from 'components/Page/PageLayout/PageLayout';

export const App: FC = () => {
  return (
    <PageLayout>
      <ModalRoot />
      <PageHeader />
      <PagesRoot />
    </PageLayout>
  );
}
