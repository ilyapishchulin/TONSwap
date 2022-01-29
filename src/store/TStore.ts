import { TRouterStore } from './router/TRouterStore';
import { TSwapStore } from './swap/TSwapStore';
import { TUserStore } from './user/TUserStore';
import { TLiquidityStore } from './liquidity/TLiquidityStore';
import { TSettingsStore } from './settings/TSettingsStore';
import { TCurrentPoolStore } from './currentPool/TCurrentPoolStore';

export type TStore = {
  router: TRouterStore,
  swap: TSwapStore,
  user: TUserStore,
  liquidity: TLiquidityStore;
  settings: TSettingsStore;
  currentPool: TCurrentPoolStore;
};