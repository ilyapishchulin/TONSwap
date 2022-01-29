import { ChangeEvent } from 'react';
import { TPairPart } from 'types/TPairPart';

export type TTokensPairLabel = {
  pairData: TPairPart;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
