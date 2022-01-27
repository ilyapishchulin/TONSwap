import { FC, memo } from 'react';
import { TSettingsFormSaveButton } from './TSettingsFormSaveButton';
import './SettingsFormSaveButton.css';

import { Text } from 'components/Typography/Text/Text';

export const SettingsFormSaveButton: FC<TSettingsFormSaveButton> = memo(({ onClick }) => (
  <button className="SettingsFormSaveButton" onClick={onClick}>
    <Text className="SettingsFormSaveButton__text" weight="bold">Save</Text>
  </button>
));
