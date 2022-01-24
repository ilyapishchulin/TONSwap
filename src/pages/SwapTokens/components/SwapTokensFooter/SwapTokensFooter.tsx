import { FC } from 'react';
import './SwapTokensFooter.css';

import { SwapTokensIconButton } from './components/SwapTokensIconButton/SwapTokensIconButton';

import { ReactComponent as Icon28ReverseOutline } from 'icons/28/reverse.svg';
import { ReactComponent as Icon28SettingsOutline } from 'icons/28/settings.svg';
import { SwapTokensButton } from './components/SwapTokensButton/SwapTokensButton';

export const SwapTokensFooter: FC = () => (
  <footer className="SwapTokensFooter">
    <SwapTokensIconButton Icon={Icon28ReverseOutline} />
    <SwapTokensIconButton Icon={Icon28SettingsOutline} />
    <SwapTokensButton />
  </footer>
);
