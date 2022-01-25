import { FC, memo } from 'react';
import { TSwapTokensIconButton } from './TSwapTokensIconButton';
import './SwapTokensIconButton.css';

export const SwapTokensIconButton: FC<TSwapTokensIconButton> = memo(({ onClick, Icon }) => (
  <button onClick={onClick} className="SwapTokensIconButton">
    <Icon />
  </button>
));
