import { requestAPIMethod } from '../requestAPIMethod';
import { EAPIMethods } from '../EAPIMethods';

export const requestTokens = () => {
  return requestAPIMethod(EAPIMethods.TOKENS);
}