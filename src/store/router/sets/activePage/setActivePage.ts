import { TAction } from 'store/TAction';
import { EPages } from 'enums/EPages';

export const ACTIVE_PAGE_SET = 'activePage/set';

export const setActivePage = (activePage: EPages): TAction<typeof ACTIVE_PAGE_SET, EPages> => ({
  type: ACTIVE_PAGE_SET,
  data: activePage,
});
