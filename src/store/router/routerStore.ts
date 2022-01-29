import { TRouterStore } from './TRouterStore';
import { EPages } from 'enums/EPages';

export const routerStore: TRouterStore = {
  activePage: window.location.pathname as EPages,
  routerParams: {},
};
