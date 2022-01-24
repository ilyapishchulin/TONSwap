import { FC } from 'react';

import { MiddleLayout } from 'pages/components/Layouts/MiddleLayout/MiddleLayout';

import { SwapTokensTitle } from './components/SwapTokensTitle/SwapTokensTitle';
import { SwapTokensInputs } from './components/SwapTokensInputs/SwapTokensInputs';
import { SwapTokensFooter } from './components/SwapTokensFooter/SwapTokensFooter';

export const SwapTokens: FC = () => (
  <MiddleLayout>
    <SwapTokensTitle />
    <SwapTokensInputs />
    <SwapTokensFooter />
  </MiddleLayout>
);
