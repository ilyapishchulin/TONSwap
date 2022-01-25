import { TRouterParams } from 'utils/TRouter';
import { TAction } from 'store/TAction';

export const ROUTER_PARAMS_SET = 'routerParams/set';

export const setRouterParams = (routerParams: TRouterParams): TAction<typeof ROUTER_PARAMS_SET, TRouterParams> => ({
  type: ROUTER_PARAMS_SET,
  data: routerParams,
});
