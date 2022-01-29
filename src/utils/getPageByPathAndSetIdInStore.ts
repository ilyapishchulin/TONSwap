import { EPages } from 'enums/EPages';

const ROUTER_STRING_WITHOUT_ID = '^[a-zA-Z\\/]*';

export const getPageByPathAndSetIdInStore = (path: string): EPages => {
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