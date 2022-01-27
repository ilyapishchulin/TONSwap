import { ReactNode } from 'react';
import { TAction } from 'store/TAction';

export const SNACKBAR_NOTIFICATION_SET = 'snackbarNotification/set';

export const setSnackbarNotification = (snackbarNotification: ReactNode|undefined): TAction<typeof SNACKBAR_NOTIFICATION_SET, ReactNode|undefined> => ({
  type: SNACKBAR_NOTIFICATION_SET,
  data: snackbarNotification,
});
