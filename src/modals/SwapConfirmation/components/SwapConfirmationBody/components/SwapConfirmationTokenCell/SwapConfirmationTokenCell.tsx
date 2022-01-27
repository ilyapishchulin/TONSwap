import { FC, memo } from 'react';
import { TSwapConfirmationTokenCell } from './TSwapConfirmationTokenCell';
import './SwapConfirmationTokenCell.css';

import { ETokenImages } from 'enums/ETokenImages';

import { Subhead } from 'components/Typography/Subhead/Subhead';
import { Headline } from 'components/Typography/Headline/Headline';

export const SwapConfirmationTokenCell: FC<TSwapConfirmationTokenCell> = memo(({ top, token, exchangeCount }) => (
  <div className="SwapConfirmationTokenCell">
    <Subhead className="SwapConfirmationTokenCell__top" weight="semibold">{top}</Subhead>
    <div className="SwapConfirmationTokenCellInput">
      <Headline className="SwapConfirmationTokenCellInput__exchangeCount" weight="semibold">{exchangeCount}</Headline>
      <div className="SwapConfirmationTokenCellInputToken">
        <img
          alt="Token cover"
          className="SwapConfirmationTokenCellInputToken__cover"
          src={token.images[ETokenImages.SMALL]}
          srcSet={`${token.images[ETokenImages.SMALL]}, ${token.images[ETokenImages.SMALL_RETINA]} 2x`}
        />
        <Headline
          weight="bold"
          className="SwapConfirmationTokenCellInputToken__ticker"
        >
          {token.ticker}
        </Headline>
      </div>
    </div>
  </div>
));
