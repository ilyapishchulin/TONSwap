import { FC } from 'react';

import { ModalHeader } from '../components/ModalHeader/ModalHeader';
import { SwapConfirmationBody } from './components/SwapConfirmationBody/SwapConfirmationBody';

export const SwapConfirmation: FC = () => (
  <section>
    <ModalHeader title="Confirmation" />
    <SwapConfirmationBody />
  </section>
);
