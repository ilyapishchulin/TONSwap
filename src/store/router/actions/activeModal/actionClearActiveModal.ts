import { TRouterStore } from '../../TRouterStore';

export const actionClearActiveModal = (
  state: TRouterStore,
): TRouterStore => ({
  ...state,
  activeModal: undefined,
});
