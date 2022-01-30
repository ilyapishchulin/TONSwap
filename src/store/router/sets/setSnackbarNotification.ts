import { ReactElement } from 'react';
import { TAction } from 'store/TAction';

export const SNACKBAR_NOTIFICATION_SET = 'snackbarNotification/set';

export const setSnackbarNotification = (snackbarNotification: ReactElement|undefined): TAction<typeof SNACKBAR_NOTIFICATION_SET, ReactElement|undefined> => ({
  type: SNACKBAR_NOTIFICATION_SET,
  data: snackbarNotification,
});
