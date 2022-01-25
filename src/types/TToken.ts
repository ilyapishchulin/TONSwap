import { ETokenImages } from 'enums/ETokenImages';

export type TToken = {
  name: string;
  ticker: string,
  images: Record<ETokenImages, string>;
}