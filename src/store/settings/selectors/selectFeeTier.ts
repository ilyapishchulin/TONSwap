import { TStore } from 'store/TStore';
import { EFeeTiers } from 'enums/EFeeTiers';

export const selectFeeTier = (store: TStore): EFeeTiers => store.settings.feeTier;