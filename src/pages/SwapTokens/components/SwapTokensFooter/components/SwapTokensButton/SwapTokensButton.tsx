import { FC, memo } from 'react';
import { TSwapTokensButton } from './TSwapTokensButton';
import './SwapTokensButton.css';

import { Headline } from 'components/Typography/Headline/Headline';

export const SwapTokensButton: FC<TSwapTokensButton> = memo(({ name, disabled, onClick }) => (
  <button disabled={disabled} onClick={onClick} className="SwapTokensButton">
    <Headline className="SwapTokensButton__text" weight="bold">{name}</Headline>
  </button>
));
