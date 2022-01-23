import { TAction } from 'store/TAction';

export const ACTIVE_MODAL_CLEAR = 'activeModal/clear';

export const clearActiveModal = (): TAction<typeof ACTIVE_MODAL_CLEAR> => ({
  type: ACTIVE_MODAL_CLEAR,
});
