import { FC, memo } from 'react';
import { TSelectToken } from './TSelectToken';
import './SelectToken.css';

import { classNames } from 'utils/classNames';

import { ReactComponent as Icon16CircleOutline } from 'icons/16/circle.svg';
import { ReactComponent as Icon12DropdownOutline } from 'icons/12/dropworn.svg';

import { Headline } from 'components/Typography/Headline/Headline';

export const SelectToken: FC<TSelectToken> = memo(({ ticker, imageSrc, imageSrcSet, onSelectedToken }) => (
  <div onClick={onSelectedToken} className="SelectToken">
    {imageSrc ? <img className="SelectToken__image" alt="Token logo" src={imageSrc} srcSet={imageSrcSet} /> : <Icon16CircleOutline className="SelectToken__fakeToken" />}
    <Headline className={classNames({
      'SelectToken__empty': !ticker,
      'SelectToken__text': !!ticker,
    })} weight="bold">{ticker || 'TOKEN'}</Headline>
    <Icon12DropdownOutline className="SelectToken__icon" />
  </div>
));
