import { TAction } from 'store/TAction';

export const CURRENT_POOL_CLEAR = 'currentPool/clear';

export const clearCurrentPool = (): TAction<typeof CURRENT_POOL_CLEAR> => ({
  type: CURRENT_POOL_CLEAR,
});
