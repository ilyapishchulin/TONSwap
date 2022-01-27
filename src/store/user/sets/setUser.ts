import { TUser } from 'types/TUser';

export const USER_SET = 'user/set';

export const setUser = (user: TUser) => ({
  type: USER_SET,
  data: user,
});
