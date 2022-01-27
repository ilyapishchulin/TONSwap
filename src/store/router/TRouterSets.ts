import { setActiveModal } from './sets/activeModal/setActiveModal';
import { clearActiveModal } from './sets/activeModal/clearActiveModal';
import { setActivePage } from './sets/activePage/setActivePage';
import { setRouterParams } from './sets/setRouterParams';
import { setSnackbarNotification } from './sets/setSnackbarNotification';

export type TRouterSets = ReturnType<
  | typeof setActiveModal
  | typeof clearActiveModal
  | typeof setActivePage
  | typeof setRouterParams
  | typeof setSnackbarNotification
>;