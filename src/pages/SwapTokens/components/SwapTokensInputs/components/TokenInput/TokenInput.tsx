import { FC, memo } from 'react';
import { TTokenInput } from './TTokenInput';
import './TokenInput.css';

import { ETokenImages } from 'enums/ETokenImages';

import { Subhead } from 'components/Typography/Subhead/Subhead';
import { SelectToken } from './components/SelectToken/SelectToken';
import { Caption } from 'components/Typography/Caption/Caption';

export const TokenInput: FC<TTokenInput> = memo(({ token, balance, onSelectedToken }) => (
  <label className="TokenInput">
    <div className="TokenInputFields">
      <input placeholder="0.0" className="TokenInputFields__input" />
      <SelectToken
        onSelectedToken={onSelectedToken}
        ticker={token?.ticker}
        imageSrc={token?.images[ETokenImages.SMALL]}
        imageSrcSet={`${token?.images[ETokenImages.SMALL]}, ${token?.images[ETokenImages.SMALL_RETINA]} 2x`}
      />
    </div>
    <div className="TokenInputCountingFields">
      <Subhead className="TokenInputCountingFields__transfer" weight="semibold">$0</Subhead>
      <Caption className="TokenInputCountingFields__balance" weight="regular">
        {balance ? `Balance: ${balance} TON` : 'Choose token'}
      </Caption>
    </div>
  </label>
));
