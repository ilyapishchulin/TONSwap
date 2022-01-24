import { FC } from 'react';
import './TokenInput.css';

import { Subhead } from 'components/Typography/Subhead/Subhead';
import { SelectToken } from './components/SelectToken/SelectToken';
import { Caption } from 'components/Typography/Caption/Caption';

export const TokenInput: FC = () => (
  <label className="TokenInput">
    <div className="TokenInputFields">
      <input placeholder="0.0" className="TokenInputFields__input" />
      <SelectToken />
    </div>
    <div className="TokenInputCountingFields">
      <Subhead className="TokenInputCountingFields__transfer" weight="semibold">$0</Subhead>
      <Caption className="TokenInputCountingFields__balance" weight="regular">Balance: 30 TON</Caption>
    </div>
  </label>
);
