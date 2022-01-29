import { FC, memo } from 'react';
import { TTokensPairLabel } from './TTokensPairLabel';
import './TokensPairLabel.css';

import { SelectToken } from 'components/Tokens/SelectToken/SelectToken';

const TOKENS_PAIR_MAX_LENGTH = 20;

export const TokensPairLabel: FC<TTokensPairLabel> = memo(({ onChange, pairData }) => (
  <label className="TokensPairLabel">
    <input value={pairData.depositCount} onChange={onChange} maxLength={TOKENS_PAIR_MAX_LENGTH} placeholder="0.0" className="TokensPairLabelInput" />
    <SelectToken token={pairData.token} className="TokensPairLabelSelectToken" />
  </label>
));