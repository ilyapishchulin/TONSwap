import { FC } from 'react';

import { ModalRoot } from './modals/components/ModalRoot/ModalRoot';
import { router } from './utils/router';
import { EPages } from './enums/EPages';
import { EModals } from './enums/EModals';
import { PagesRoot } from './pages/components/PagesRoot/PagesRoot';

export const App: FC = () => {
  return (
    <>
      <ModalRoot />
      <button onClick={() => router.openPage(EPages.Home)}>Open page</button> <br /><br />
      <button onClick={() => router.openPage(EPages.HomeWithSubPath)}>Open page random</button> <br /><br />
      <button onClick={() => router.openModal(EModals.Settings)}>Open Modal</button>
      <header>
        test
      </header>
      <PagesRoot />
    </>
  );
}
