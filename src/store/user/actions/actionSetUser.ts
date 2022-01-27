import { TUserStore } from '../TUserStore';
import { setUser } from '../sets/setUser';

export const actionSetUser = (
  state: TUserStore,
  user: ReturnType<typeof setUser>['data'],
): TUserStore => ({
  ...state,
  ...user,
});
