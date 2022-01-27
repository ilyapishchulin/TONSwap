import { TRouterStore } from '../TRouterStore';
import { setSnackbarNotification } from '../sets/setSnackbarNotification';

export const actionSetSnackbarNotification = (
  state: TRouterStore,
  snackbarNotification: ReturnType<typeof setSnackbarNotification>['data'],
): TRouterStore => ({
  ...state,
  snackbarNotification,
});
