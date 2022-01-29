import { TRouterParams } from './TRouter';

import { EPages } from 'enums/EPages';
import { EModals } from 'enums/EModals';

import { store } from 'store/store';
import { setActiveModal } from 'store/router/sets/activeModal/setActiveModal';
import { clearActiveModal } from 'store/router/sets/activeModal/clearActiveModal';
import { setActivePage } from 'store/router/sets/activePage/setActivePage';
import { setRouterParams } from 'store/router/sets/setRouterParams';
import { getPageByPathAndSetIdInStore } from './getPageByPathAndSetIdInStore';

const { dispatch } = store;

class routerUtils {
  constructor() {
    window.addEventListener('popstate', this.onPopstate);
  }

  onPopstate(e: PopStateEvent) {
    const { page } = e.state;
    dispatch(setActivePage(page ? getPageByPathAndSetIdInStore(e.state?.page) : EPages.HOME));
  }

  closeModal() {
    dispatch(clearActiveModal());
  }

  closePage() {
    window.history.back();
  }

  openPage(page: EPages, routerParams: TRouterParams = {}) {
    dispatch(setActivePage(page));
    dispatch(setRouterParams(routerParams));

    if (page.includes(':id')) {
      page = page.replace(':id', routerParams.id) as EPages;
    }

    window.history.pushState({ page }, '', page);
  }

  openModal(modal: EModals, routerParams: TRouterParams = {}) {
    dispatch(setActiveModal(modal));
    dispatch(setRouterParams(routerParams));
  }
}

export const router = new routerUtils();