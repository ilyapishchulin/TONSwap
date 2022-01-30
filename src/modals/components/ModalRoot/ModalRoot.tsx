import { FC } from 'react';
import { useSelector } from 'react-redux';
import { TModalRoot } from './TModalRoot';
import './ModalRoot.css';

import { router } from 'utils/router';
import { EModals } from 'enums/EModals';

import { SettingsModal } from 'modals/SettingModal/SettingsModal';
import { SelectToken } from 'modals/SelectToken/SelectToken';
import { SwapConfirmation } from 'modals/SwapConfirmation/SwapConfirmation';

import { selectActiveModal } from 'store/router/selectors/selectActiveModal';
import { Portal } from 'components/Portal/Portal';

export const ModalRoot: FC<TModalRoot> = () => {
  const activeModal = useSelector(selectActiveModal);

  let ModalComponent = null;
  switch (activeModal) {
    case EModals.SETTINGS:
      ModalComponent = SettingsModal;
      break;

    case EModals.SELECT_TOKEN:
      ModalComponent = SelectToken;
      break;

    case EModals.SWAP_CONFIRMATION:
      ModalComponent = SwapConfirmation;
      break;
  }

  if (!ModalComponent) {
    return null;
  }

  return (
    <Portal onClick={router.closeModal} className="ModalRootWrapper">
      <div id={activeModal} className="ModalRoot" onClick={(e) => e.stopPropagation()}>
        <ModalComponent />
      </div>
    </Portal>
  );
}