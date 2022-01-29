import { FC } from 'react';

import { MiddleLayout } from 'pages/components/Layouts/MiddleLayout/MiddleLayout';

import { CreateLiquidityHeader } from './components/CreateLiquidityHeader/CreateLiquidityHeader';
import { CreateLiquidityBody } from './components/CreateLiquidityBody/CreateLiquidityBody';
import { CreateLiquidityFooter } from './components/CreateLiquidityFooter/CreateLiquidityFooter';

export const CreateLiquidity: FC = () => (
  <MiddleLayout>
    <CreateLiquidityHeader />
    <CreateLiquidityBody />
    <CreateLiquidityFooter />
  </MiddleLayout>
);
