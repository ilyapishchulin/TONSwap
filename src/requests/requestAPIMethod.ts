import { EAPIMethods } from './EAPIMethods';

const API_URL = 'https://storage.xelene.me/ton/';

export const requestAPIMethod = (apiMethod: EAPIMethods) => {
  return fetch(`${API_URL}${apiMethod}`).then((data) => data.json());
}