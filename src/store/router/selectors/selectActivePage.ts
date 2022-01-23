import { TStore } from 'store/TStore';
import { EPages } from 'enums/EPages';

export const selectActivePage = (store: TStore): EPages => store.router.activePage;
