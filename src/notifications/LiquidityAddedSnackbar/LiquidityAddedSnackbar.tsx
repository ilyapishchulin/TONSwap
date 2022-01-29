import { FC } from 'react';
import { TLiquidityAddedSnackbar } from './TLiquidityAddedSnackbar';
import './LiquidityAddedSnackbar.css';

import { ReactComponent as Icon28PlusOutline } from 'icons/28/plus.svg';
import { Snackbar } from 'components/Snackbar/Snackbar';

export const LiquidityAddedSnackbar: FC<TLiquidityAddedSnackbar> = ({ description }) => (
  <Snackbar
    Icon={Icon28PlusOutline}
    iconClass="LiquidityAddedSnackbarIcon"
    title="Liquidity Added"
    description={description}
  />
);
