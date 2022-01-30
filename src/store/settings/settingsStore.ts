import { TSettingsStore } from './TSettingsStore';
import { EFeeTiers } from 'enums/EFeeTiers';

export const settingsStore: TSettingsStore = {
  feeTier: EFeeTiers.VERY_SMALL,
  slippageTolerance: '0.05',
  durationLimit: '30',
};
