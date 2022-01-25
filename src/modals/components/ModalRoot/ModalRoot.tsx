import { FC } from 'react';
import { useSelector } from 'react-redux';
import { TModalRoot } from './TModalRoot';
import './ModalRoot.css';

import { router } from 'utils/router';
import { EModals } from 'enums/EModals';

import { SettingsModal } from 'modals/SettingModal/SettingsModal';
import { SelectToken } from 'modals/SelectToken/SelectToken';

import { selectActiveModal } from 'store/router/selectors/selectActiveModal';

export const ModalRoot: FC<TModalRoot> = () => {
  const activeModal = useSelector(selectActiveModal);

  let ModalComponent = null;
  switch (activeModal) {
    case EModals.SWAP_SETTINGS:
      ModalComponent = SettingsModal;
      break;

    case EModals.SELECT_TOKEN:
      ModalComponent = SelectToken;
      break;
  }

  if (!ModalComponent) {
    return null;
  }

  return (
    <div className="ModalRootWrapper" onClick={router.closeModal}>
      <div id={activeModal} className="ModalRoot" onClick={(e) => e.stopPropagation()}>
        <ModalComponent />
      </div>
    </div>
  );
}