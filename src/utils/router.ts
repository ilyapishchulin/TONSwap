import { TRouterParams } from './TRouter';

import { EPages } from 'enums/EPages';
import { EModals } from 'enums/EModals';

import { store } from 'store/store';
import { setActiveModal } from 'store/router/sets/activeModal/setActiveModal';
import { clearActiveModal } from 'store/router/sets/activeModal/clearActiveModal';
import { setActivePage } from 'store/router/sets/activePage/setActivePage';
import { setRouterParams } from 'store/router/sets/setRouterParams';

const { dispatch } = store;

class routerUtils {
  constructor() {
    window.addEventListener('popstate', this.onPopstate);
  }

  onPopstate(e: PopStateEvent) {
    dispatch(setActivePage(e.state?.page || EPages.HOME));
  }

  closeModal() {
    dispatch(clearActiveModal());
  }

  openPage(page: EPages, routerParams: TRouterParams = {}) {
    window.history.pushState({
      page,
    }, '', page);
    dispatch(setActivePage(page));
    dispatch(setRouterParams(routerParams));
  }

  openModal(modal: EModals, routerParams: TRouterParams = {}) {
    dispatch(setActiveModal(modal));
    dispatch(setRouterParams(routerParams));
  }
}

export const router = new routerUtils();