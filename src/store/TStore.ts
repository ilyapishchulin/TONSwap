import { TRouterStore } from './router/TRouterStore';
import { TSwapStore } from './swap/TSwapStore';

export type TStore = {
  router: TRouterStore,
  swap: TSwapStore,
};