import { TLiquidity } from 'types/TLiquidity';
import { TPairPart } from 'types/TPairPart';

export type TLiquidityStore = {
  allLiquidities?: TLiquidity[];
  userLiquiditiesList?: TLiquidity[];
  firstInPair: TPairPart;
  secondInPair: TPairPart;
}