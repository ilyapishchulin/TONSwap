import { ChangeEvent, FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { router } from 'utils/router';

import { selectSlippageTolerance } from 'store/settings/selectors/selectSlippageTolerance';
import { selectDurationLimit } from 'store/settings/selectors/selectDurationLimit';
import { setSlippageTolerance } from 'store/settings/sets/setSlippageTolerance';
import { setDurationLimit } from 'store/settings/sets/setDurationLimit';

import { SettingsFormItem } from './components/SettingsFormItem/SettingsFormItem';
import { SettingsFormSaveButton } from './components/SettingsFormSaveButton/SettingsFormSaveButton';

const TOLERANCE_INPUT_REGEX = '^[0-9.]*$';
const MAX_TOLERANCE_INPUT_VALUE_LENGTH = 4;
const MAX_TOLERANCE_INPUT_VALUE = 100;

const DURATION_INPUT_REGEX = '^[0-9]*$';
const MAX_DURATION_INPUT_VALUE = 180;
const MIN_DURATION_INPUT_VALUE_LENGTH = 3;

export const SettingsModalBody: FC = () => {
  const dispatch = useDispatch();

  const slippageTolerance = useSelector(selectSlippageTolerance);
  const durationLimit = useSelector(selectDurationLimit);

  const [slippageToleranceState, setSlippageToleranceState] = useState(slippageTolerance);
  const [durationLimitState, setDurationLimitState] = useState(durationLimit);

  const validate = (e: ChangeEvent<HTMLInputElement>, setFunction: Function, regex: string, maxLength: number, maxValue: number) => {
    let { value } = e.currentTarget;
    if (!new RegExp(regex).test(value)) {
      return;
    }

    if (value.length > maxLength) {
      return;
    }

    if (Number(value) > maxValue) {
      value = maxValue.toString();
    }

    setFunction(value);
  };

  const setAndValidateTolerance = (e: ChangeEvent<HTMLInputElement>) => {
    validate(e, setSlippageToleranceState, TOLERANCE_INPUT_REGEX, MAX_TOLERANCE_INPUT_VALUE_LENGTH, MAX_TOLERANCE_INPUT_VALUE);
  };

  const setAndValidateDurationLimit = (e: ChangeEvent<HTMLInputElement>) => {
    validate(e, setDurationLimitState, DURATION_INPUT_REGEX, MIN_DURATION_INPUT_VALUE_LENGTH, MAX_DURATION_INPUT_VALUE);
  };

  const onSave = () => {
    dispatch(setSlippageTolerance(slippageToleranceState));
    dispatch(setDurationLimit(durationLimitState));
    router.closeModal();
  }

  return (
    <main>
      <SettingsFormItem
        top="Slippage Tolerance"
        bottom="The transaction will be canceled if the percentage is unfavorable by more than input value."
        after="%"
        placeholder="0.05"
        value={slippageToleranceState}
        onChange={setAndValidateTolerance}
      />
      <SettingsFormItem
        top="Duration Limit"
        bottom="The transaction will be canceled if pending more by input value in minutes."
        after="minutes"
        placeholder="30"
        value={durationLimitState}
        onChange={setAndValidateDurationLimit}
      />
      <SettingsFormSaveButton onClick={onSave} />
    </main>
  );
}
