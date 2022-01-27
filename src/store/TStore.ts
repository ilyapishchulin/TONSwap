import { TRouterStore } from './router/TRouterStore';
import { TSwapStore } from './swap/TSwapStore';
import { TUserStore } from './user/TUserStore';

export type TStore = {
  router: TRouterStore,
  swap: TSwapStore,
  user: TUserStore,
};