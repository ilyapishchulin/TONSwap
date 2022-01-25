import { FC } from 'react';
import './SelectToken.css';

import { ModalHeader } from 'modals/components/ModalHeader/ModalHeader';
import { TokenList } from './components/TokenList/TokenList';

export const SelectToken: FC = () => (
  <section>
    <ModalHeader title="Select Token" />
    <TokenList />
  </section>
);
