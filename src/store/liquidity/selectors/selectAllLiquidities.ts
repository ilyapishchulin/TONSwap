import { TStore } from 'store/TStore';
import { TLiquidity } from 'types/TLiquidity';

export const selectAllLiquidities = (store: TStore): TLiquidity[]|undefined => store.liquidity.allLiquidities;
