import { ReactElement } from 'react';
import { TStore } from 'store/TStore';

export const selectSnackbarNotification = (store: TStore): ReactElement|undefined => store.router.snackbarNotification;
