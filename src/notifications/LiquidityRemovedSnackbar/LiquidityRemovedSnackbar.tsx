import { FC } from 'react';
import { TLiquidityRemovedSnackbar } from './TLiquidityRemovedSnackbar';
import './LiquidityRemovedSnackbar.css';

import { ReactComponent as Icon28MinusOutline } from 'icons/28/minus.svg';
import { Snackbar } from 'components/Snackbar/Snackbar';

export const LiquidityRemovedSnackbar: FC<TLiquidityRemovedSnackbar> = ({ description }) => (
  <Snackbar
    Icon={Icon28MinusOutline}
    iconClass="LiquidityRemovedSnackbarIcon"
    title="Liquidity Removed"
    description={description}
  />
);
