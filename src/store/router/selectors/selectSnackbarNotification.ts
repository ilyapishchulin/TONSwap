import { ReactNode } from 'react';
import { TStore } from 'store/TStore';

export const selectSnackbarNotification = (store: TStore): ReactNode|undefined => store.router.snackbarNotification;
