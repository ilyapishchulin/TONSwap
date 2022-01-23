import { EModals } from 'enums/EModals';
import { TAction } from 'store/TAction';

export const ACTIVE_MODAL_SET = 'activeModal/set';

export const setActiveModal = (activeModal: EModals): TAction<typeof ACTIVE_MODAL_SET, EModals> => ({
  type: ACTIVE_MODAL_SET,
  data: activeModal,
});
