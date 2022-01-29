import { FC } from 'react';

import { ReactComponent as MasksEffects } from 'icons/masks.svg';
import { FreeCentredLayout } from 'pages/components/Layouts/FreeCentredLayout/FreeCentredLayout';

import { PoolsYourLiquidity } from './components/PoolsYourLiquidity/PoolsYourLiquidity';
import { AllPools } from './components/AllPools/AllPools';

export const PoolsPage: FC = () => (
  <FreeCentredLayout>
    <MasksEffects />
    <PoolsYourLiquidity />
    <AllPools />
  </FreeCentredLayout>
);
