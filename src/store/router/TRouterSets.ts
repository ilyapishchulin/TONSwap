import { setActiveModal } from './sets/activeModal/setActiveModal';
import { clearActiveModal } from './sets/activeModal/clearActiveModal';
import { setActivePage } from './sets/activePage/setActivePage';

export type TRouterSets = ReturnType<
  | typeof setActiveModal
  | typeof clearActiveModal
  | typeof setActivePage
>;