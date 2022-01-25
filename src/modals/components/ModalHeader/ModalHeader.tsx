import { FC, memo } from 'react';
import { TModalHeader } from './TModalHeader';
import './ModalHeader.css';

import { router } from 'utils/router';

import { Title } from 'components/Typography/Title/Title';
import { ReactComponent as Icon28DismissOutline } from 'icons/28/dismiss.svg';

export const ModalHeader: FC<TModalHeader> = memo(({ title }) => (
  <header className="ModalHeader">
    <Title className="ModalHeader__title" level="2" weight="extrabold">{title}</Title>
    <Icon28DismissOutline onClick={router.closeModal} className="ModalHeader__icon" />
  </header>
));
