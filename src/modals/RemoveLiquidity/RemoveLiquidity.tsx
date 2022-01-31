import { FC } from 'react';

import { ModalHeader } from 'modals/components/ModalHeader/ModalHeader';
import { RemoveLiquidityBody } from './components/RemoveLiquidityBody/RemoveLiquidityBody';
import { RemoveLiquidityFooter } from './components/RemoveLiquidityFooter/RemoveLiquidityFooter';

export const RemoveLiquidity: FC = () => (
  <section>
    <ModalHeader title="Remove Liquidity" />
    <RemoveLiquidityBody />
    <RemoveLiquidityFooter />
  </section>
);
