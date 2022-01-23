import { TStore } from 'store/TStore';
import { EModals } from 'enums/EModals';

export const selectActiveModal = (store: TStore): EModals|undefined => store.router.activeModal;
