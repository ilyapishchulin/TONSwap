import { TRouterStore } from './TRouterStore';
import { getPageByPathAndSetIdInStore } from 'utils/getPageByPathAndSetIdInStore';

export const routerStore: TRouterStore = {
  activePage: getPageByPathAndSetIdInStore(window.location.pathname),
  routerParams: {},
};
