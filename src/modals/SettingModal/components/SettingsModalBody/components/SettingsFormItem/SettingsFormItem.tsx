import { FC } from 'react';
import { TSettingsFormItem } from './TSettingsFormItem';
import './SettingsFormItem.css';

import { Subhead } from 'components/Typography/Subhead/Subhead';
import { Caption } from 'components/Typography/Caption/Caption';

export const SettingsFormItem: FC<TSettingsFormItem> = ({ onChange, value, top, after, bottom, placeholder }) => (
  <div className="SettingsFormItem">
    <Subhead className="SettingsFormItem__top" weight="semibold">{top}</Subhead>
    <label className="SettingsFormItemFields">
      <input onChange={onChange} value={value} placeholder={placeholder} className="SettingsFormItemFields__input" />
      <Caption className="SettingsFormItemFields__after" weight="bold">{after}</Caption>
    </label>
    <Caption className="SettingsFormItem__bottom" weight="semibold">{bottom}</Caption>
  </div>
);
