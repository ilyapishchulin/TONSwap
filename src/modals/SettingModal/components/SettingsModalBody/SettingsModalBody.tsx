import { FC } from 'react';
import './SettingsModalBody.css';

import { SettingsFormItem } from './components/SettingsFormItem/SettingsFormItem';

export const SettingsModalBody: FC = () => (
  <main className="SettingsModalBody">
    <SettingsFormItem
      top="Slippage Tolerance"
      bottom="The transaction will be canceled if the percentage is unfavorable by more than 0.5%."
      after="%"
      placeholder="0.05"
    />
    <SettingsFormItem
      top="Duration Limit"
      bottom="The transaction will be canceled if pending for 30 minutes."
      after="minutes"
      placeholder="30"
    />
  </main>
);
