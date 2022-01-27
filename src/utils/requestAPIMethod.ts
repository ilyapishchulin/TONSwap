import { EAPIMethods } from 'enums/EAPIMethods';
import { ERequestMethods } from 'enums/ERequestMethods';

const API_URL = 'https://storage.xelene.me/ton/';

export const requestAPIMethod = (apiMethod: EAPIMethods, method = ERequestMethods.POST, params: any = {}) => {
  const requestParams: RequestInit = {
    method,
  };

  const headers = new Headers([
    ['Content-Type', 'application/x-www-form-urlencoded']
  ]);

  if ([ERequestMethods.PATCH, ERequestMethods.PUT, ERequestMethods.POST, ERequestMethods.DELETE].includes(method)) {
    headers.set('Content-Type', 'application/json; charset=UTF-8');
    requestParams.body = JSON.stringify(params);
  }

  return fetch(`${API_URL}${apiMethod}`, requestParams).then((data) => data.json());
}