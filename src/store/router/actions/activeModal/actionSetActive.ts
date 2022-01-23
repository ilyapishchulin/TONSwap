import { TRouterStore } from '../../TRouterStore';
import { EModals } from 'enums/EModals';

export const actionSetActive = (
  state: TRouterStore,
  activeModal: EModals
): TRouterStore => ({
  ...state,
  activeModal,
});
