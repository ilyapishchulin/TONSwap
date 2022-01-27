import { FC, memo } from 'react';
import { TSwapConfirmationCell } from './TSwapConfirmationCell';
import './SwapConfirmationCell.css';

import { Subhead } from 'components/Typography/Subhead/Subhead';

export const SwapConfirmationCell: FC<TSwapConfirmationCell> = memo(({ before, after }) => (
  <div className="SwapConfirmationCell">
    <Subhead className="SwapConfirmationCell__before" weight="semibold">{before}</Subhead>
    <Subhead className="SwapConfirmationCell__after" weight="bold">{after}</Subhead>
  </div>
));