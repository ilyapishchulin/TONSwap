import { TSettingsSets } from './TSettingsSets';
import { settingsStore } from './settingsStore';
import { TSettingsStore } from './TSettingsStore';
import { FEE_TIER_SET } from './sets/setFeeTier';
import { actionSetFeetTier } from './actions/actionSetFeetTier';
import { DURATION_LIMIT_SET } from './sets/setDurationLimit';
import { actionSetDurationLimit } from './actions/actionSetDurationLimit';
import { SLIPPAGE_TOLERANCE_SET } from './sets/setSlippageTolerance';
import { actionSetSlippageTolerance } from './actions/actionSetSlippageTolerance';

export const settingsReducer = (
  state = settingsStore,
  action: TSettingsSets,
): TSettingsStore => {
  switch (action.type) {
    case FEE_TIER_SET:
      return actionSetFeetTier(state, action.data);

    case DURATION_LIMIT_SET:
      return actionSetDurationLimit(state, action.data);

    case SLIPPAGE_TOLERANCE_SET:
      return actionSetSlippageTolerance(state, action.data);

    default:
      return state;
  }
}