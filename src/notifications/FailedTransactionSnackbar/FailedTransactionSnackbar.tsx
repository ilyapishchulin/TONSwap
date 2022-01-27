import { FC } from 'react';
import { TFailedTransactionSnackbar } from './TFailedTransactionSnackbar';
import './FailedTransactionSnackbar.css';

import { ReactComponent as Icon28CheckmarkOutline } from 'icons/28/checkmark.svg';
import { Snackbar } from 'components/Snackbar/Snackbar';

export const FailedTransactionSnackbar: FC<TFailedTransactionSnackbar> = ({ description }) => (
  <Snackbar
    Icon={Icon28CheckmarkOutline}
    iconClass="FailedTransactionSnackbarIcon"
    title="Transaction Failed"
    description={description}
  />
);
