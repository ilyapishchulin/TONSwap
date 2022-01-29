import { ChangeEvent, HTMLAttributes } from 'react';
import { TPairPart } from 'types/TPairPart';

export type TTokensPair = HTMLAttributes<HTMLDivElement> & {
  firstInPair: TPairPart;
  secondInPair: TPairPart;
  onChangeFirstPair?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeSecondPair?: (e: ChangeEvent<HTMLInputElement>) => void;
};
