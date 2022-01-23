import { EPages } from 'enums/EPages';
import { EModals } from 'enums/EModals';

import { store } from 'store/store';
import { setActiveModal } from 'store/router/sets/activeModal/setActiveModal';
import { clearActiveModal } from 'store/router/sets/activeModal/clearActiveModal';
import { setActivePage } from 'store/router/sets/activePage/setActivePage';

const { dispatch } = store;

class routerUtils {
  constructor() {
    window.addEventListener('popstate', this.onPopstate);
  }

  onPopstate(e: PopStateEvent) {
    dispatch(setActivePage(e.state?.page || EPages.Home));
  }

  closeModal() {
    dispatch(clearActiveModal());
  }

  openPage(page: EPages) {
    window.history.pushState({
      page,
    }, '', page);
    dispatch(setActivePage(page));
  }

  openModal(modal: EModals) {
    dispatch(setActiveModal(modal));
  }
}

export const router = new routerUtils();