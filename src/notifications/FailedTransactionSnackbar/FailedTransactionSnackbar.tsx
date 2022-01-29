import { FC } from 'react';
import { TFailedTransactionSnackbar } from './TFailedTransactionSnackbar';
import './FailedTransactionSnackbar.css';

import { ReactComponent as Icon28ErrorOutline } from 'icons/28/error.svg';
import { Snackbar } from 'components/Snackbar/Snackbar';

export const FailedTransactionSnackbar: FC<TFailedTransactionSnackbar> = ({ description }) => (
  <Snackbar
    Icon={Icon28ErrorOutline}
    iconClass="FailedTransactionSnackbarIcon"
    title="Transaction Failed"
    description={description}
  />
);
