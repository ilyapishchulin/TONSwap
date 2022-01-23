import { TRouterStore } from '../TRouterStore';
import { EPages } from 'enums/EPages';

export const actionSetActivePage = (
  state: TRouterStore,
  activePage: EPages,
): TRouterStore => ({
  ...state,
  activePage,
});
