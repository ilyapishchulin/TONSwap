import { EFeeTiers } from 'enums/EFeeTiers';

export type TSettingsStore = {
  feeTier: EFeeTiers;
  slippageTolerance: string;
  durationLimit: string,
};
