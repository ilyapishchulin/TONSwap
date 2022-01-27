import { FC } from 'react';
import { useSelector } from 'react-redux';

import { selectSnackbarNotification } from 'store/router/selectors/selectSnackbarNotification';

export const PageNotificationsRoot: FC = () => {
  const snackbarNotification: any = useSelector(selectSnackbarNotification);
  if (!snackbarNotification) {
    return null;
  }

  // Without portal, because snackbar must render in layout
  return snackbarNotification;
};