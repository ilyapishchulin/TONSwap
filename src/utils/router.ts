import { TRouterParams } from './TRouter';

import { EPages } from 'enums/EPages';
import { EModals } from 'enums/EModals';

import { store } from 'store/store';
import { setActiveModal } from 'store/router/sets/activeModal/setActiveModal';
import { clearActiveModal } from 'store/router/sets/activeModal/clearActiveModal';
import { setActivePage } from 'store/router/sets/activePage/setActivePage';
import { setRouterParams } from 'store/router/sets/setRouterParams';
import { getPageByPathAndSetIdInStore } from './getPageByPathAndSetIdInStore';
import { clearCurrentPool } from '../store/currentPool/sets/clearCurrentPool';

const { dispatch } = store;

class routerUtils {
  constructor() {
    window.addEventListener('popstate', this.onPopstate);
  }

  onPopstate(e: PopStateEvent) {
    dispatch(setActivePage(getPageByPathAndSetIdInStore(e.state?.page || window.location.pathname)));
  }

  closeModal() {
    dispatch(clearActiveModal());
  }

  closePage() {
    window.history.back();
  }

  openPage(page: EPages, routerParams: TRouterParams = {}) {
    routerUtils.clearStatesByPage(page);

    dispatch(setActivePage(page));
    dispatch(setRouterParams(routerParams));

    if (page.includes(':id')) {
      page = page.replace(':id', routerParams.id) as EPages;
    }

    const splitPaths = window.location.pathname.split('/');
    splitPaths[splitPaths.length - 1] = page.replace('/', '');

    window.history.pushState({ page }, '', splitPaths.join('/'));
  }

  openModal(modal: EModals, routerParams: TRouterParams = {}) {
    dispatch(setActiveModal(modal));
    dispatch(setRouterParams(routerParams));
  }

  private static clearStatesByPage(page: EPages) {
    switch (page) {
      case EPages.POOL_STATISTIC:
        store.dispatch(clearCurrentPool());
        break;
    }
  }
}

export const router = new routerUtils();