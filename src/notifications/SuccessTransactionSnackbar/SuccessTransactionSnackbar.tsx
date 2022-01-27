import { FC } from 'react';
import { TSuccessTransactionSnackbar } from './TSuccessTransactionSnackbar';
import './SuccessTransactionSnackbar.css';

import { ReactComponent as Icon28CheckmarkOutline } from 'icons/28/checkmark.svg';
import { Snackbar } from 'components/Snackbar/Snackbar';

export const SuccessTransactionSnackbar: FC<TSuccessTransactionSnackbar> = ({ description }) => (
  <Snackbar
    Icon={Icon28CheckmarkOutline}
    iconClass="SuccessTransactionSnackbarIcon"
    title="Transaction Succeeded"
    description={description}
  />
);
