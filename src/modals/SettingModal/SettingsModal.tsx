import { FC } from 'react';

import { ModalHeader } from '../components/ModalHeader/ModalHeader';
import { SettingsModalBody } from './components/SettingsModalBody/SettingsModalBody';

export const SettingsModal: FC = () => (
  <section>
    <ModalHeader title="Settings" />
    <SettingsModalBody />
  </section>
);
