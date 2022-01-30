import { EPages } from 'enums/EPages';

const ROUTER_STRING_WITHOUT_ID = '^[a-zA-Z\\/]*';

export const getPageByPathAndSetIdInStore = (path: string): EPages => {
  // If application isn't opened in the main directory, replace paths to main
  const splitPaths = path.split('/');
  path = `/${splitPaths[splitPaths.length - 1] || ''}`;

  const pages = Object.values(EPages);
  if (!pages.includes(path as EPages) && path.search(/\d/) === -1) {
    window.history.replaceState({}, '', `${path}/`);
    path = EPages.HOME;
  }

  const dynamicPages = Object.values(EPages).filter((item) => item.includes(':id'));
  for (let i = 0; i < dynamicPages.length; i++) {
    const item = dynamicPages[i];
    const [pathName] = item.split(':id');
    const [stringWithoutId] = new RegExp(ROUTER_STRING_WITHOUT_ID).exec(path) || [];
    if (stringWithoutId === pathName) {
      return item;
    }
  }

  return path as EPages;
};