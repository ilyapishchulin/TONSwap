import { ETokenImages } from 'enums/ETokenImages';
import { TToken } from 'types/TToken';

export type TTokenStack = {
  firstToken: TToken;
  secondToken: TToken;
  size: ETokenImages;
};
