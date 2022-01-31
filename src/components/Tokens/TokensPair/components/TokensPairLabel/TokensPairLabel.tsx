import { FC, memo, useState } from 'react';
import { TTokensPairLabel } from './TTokensPairLabel';
import './TokensPairLabel.css';

import { classNames } from 'utils/classNames';

import { SelectToken } from 'components/Tokens/SelectToken/SelectToken';

const TOKENS_PAIR_MAX_LENGTH = 20;

export const TokensPairLabel: FC<TTokensPairLabel> = memo(({ onChange, pairData }) => {
  const [focused, setFocused] = useState(false);

  return (
    <label
      className={classNames('TokensPairLabel', {
        'TokensPairLabel--focused': focused,
        'TokensPairLabel--disabled': !pairData.token,
      })}
      onBlur={() => setFocused(false)}
      onFocus={() => setFocused(true)}
    >
      <input disabled={!pairData.token} value={pairData.depositCount} onChange={onChange} maxLength={TOKENS_PAIR_MAX_LENGTH} placeholder="0.0" className="TokensPairLabelInput" />
      <SelectToken token={pairData.token} className="TokensPairLabelSelectToken" />
    </label>
  )
});