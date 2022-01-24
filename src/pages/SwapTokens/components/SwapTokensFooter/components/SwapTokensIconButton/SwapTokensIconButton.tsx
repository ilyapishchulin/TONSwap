import { FC, memo } from 'react';
import './SwapTokensIconButton.css';

export const SwapTokensIconButton: FC<any> = memo(({ Icon }) => (
  <button className="SwapTokensIconButton">
    <Icon />
  </button>
));
