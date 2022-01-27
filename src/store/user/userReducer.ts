import { userStore } from './userStore';
import { TUserStore } from './TUserStore';
import { TUserSets } from './TUserSets';

import { USER_SET } from './sets/setUser';
import { actionSetUser } from './actions/actionSetUser';

export const userReducer = (
  state = userStore,
  action: TUserSets,
): TUserStore => {
  switch (action.type) {
    case USER_SET:
      return actionSetUser(state, action.data);

    default:
      return state;
  }
}