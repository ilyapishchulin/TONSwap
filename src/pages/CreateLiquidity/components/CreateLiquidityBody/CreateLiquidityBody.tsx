import { FC } from 'react';
import './CreateLiquidityBody.css';

import { CreateLiquidityPair } from './components/CreateLiquidityPair/CreateLiquidityPair';
import { CreateLiquidityDeposit } from './components/CreateLiquidityDeposit/CreateLiquidityDeposit';
import { CreateLiquidityFeeTier } from './components/CreateLiquidityFeeTier/CreateLiquidityFeeTier';

export const CreateLiquidityBody: FC = () => (
  <main className="CreateLiquidityBody">
    <CreateLiquidityPair />
    <CreateLiquidityDeposit />
    <CreateLiquidityFeeTier />
  </main>
);
