import { TLiquidityStore } from './TLiquidityStore';

export const defaultPair = {
  depositCount: '',
  token: undefined,
};

export const liquidityStore: TLiquidityStore = {
  firstInPair: defaultPair,
  secondInPair: defaultPair,
};
