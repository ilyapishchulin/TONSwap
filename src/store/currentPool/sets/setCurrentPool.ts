import { TAction } from 'store/TAction';
import { TCurrentPoolStore } from '../TCurrentPoolStore';

export const CURRENT_POOL_SET = 'currentPool/set';

export const setCurrentPool = (currentPool: TCurrentPoolStore): TAction<typeof CURRENT_POOL_SET, TCurrentPoolStore> => ({
  type: CURRENT_POOL_SET,
  data: currentPool,
});
