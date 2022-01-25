import { TRouterParams } from 'utils/TRouter';

import { EModals } from 'enums/EModals';
import { EPages } from 'enums/EPages';

export type TRouterStore = {
  activeModal?: EModals;
  activePage: EPages;
  routerParams: TRouterParams;
};
