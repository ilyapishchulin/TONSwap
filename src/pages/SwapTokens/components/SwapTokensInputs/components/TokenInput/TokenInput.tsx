import { ChangeEvent, FC, memo, useState } from 'react';
import { TTokenInput } from './TTokenInput';
import './TokenInput.css';

import { classNames } from 'utils/classNames';
import { ETokenImages } from 'enums/ETokenImages';

import { SelectToken } from './components/SelectToken/SelectToken';
import { CountingFields } from './components/CountingFields/CountingFields';

const TOKEN_INPUT_REGEX = '^[0-9.]*$';

export const TokenInput: FC<TTokenInput> = memo(({
  token,
  price,
  changePrice,
  changePriceMode,
  exchangeCount,
  onSelectedToken,
  onExchangeCountChange,
  belowSelectTokenCaption,
}) => {
  const [focused, setFocused] = useState(false);

  const validateInputValueAndSave = (e: ChangeEvent<HTMLInputElement>) => {
    let { value } = e.currentTarget;
    if (!new RegExp(TOKEN_INPUT_REGEX).test(value)) {
      return;
    }

    onExchangeCountChange(value);
  };

  return (
    <label className={classNames('TokenInput', {
      'TokenInput--focused': focused,
    })}>
      <div className="TokenInputFields">
        <input
          type="text"
          placeholder="0.0"
          value={exchangeCount}
          maxLength={20}
          className="TokenInputFields__input"
          pattern={TOKEN_INPUT_REGEX}
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          onChange={validateInputValueAndSave}
        />
        <SelectToken
          onSelectedToken={onSelectedToken}
          ticker={token?.ticker}
          imageSrc={token?.images[ETokenImages.SMALL]}
          imageSrcSet={`${token?.images[ETokenImages.SMALL]}, ${token?.images[ETokenImages.SMALL_RETINA]} 2x`}
        />
      </div>
      <CountingFields
        price={price}
        changePrice={changePrice}
        changePriceMode={changePriceMode}
        belowSelectTokenCaption={belowSelectTokenCaption}
      />
    </label>
  );
});
