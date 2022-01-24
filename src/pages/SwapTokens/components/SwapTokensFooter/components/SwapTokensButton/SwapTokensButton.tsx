import { FC } from 'react';
import './SwapTokensButton.css';

import { Headline } from 'components/Typography/Headline/Headline';

export const SwapTokensButton: FC = () => (
  <button className="SwapTokensButton">
    <Headline className="SwapTokensButton__text" weight="bold">Swap</Headline>
  </button>
);
