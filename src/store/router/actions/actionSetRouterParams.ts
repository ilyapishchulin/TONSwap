import { TRouterStore } from '../TRouterStore';
import { TRouterParams } from 'utils/TRouter';

export const actionSetRouterParams = (
  state: TRouterStore,
  routerParams: TRouterParams,
): TRouterStore => ({
  ...state,
  routerParams,
});
