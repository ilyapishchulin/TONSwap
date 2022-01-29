import { FC, memo } from 'react';
import { TSelectToken } from './TSelectToken';
import './SelectToken.css';

import { ETokenImages } from 'enums/ETokenImages';
import { classNames } from 'utils/classNames';

import { ReactComponent as Icon16CircleOutline } from 'icons/16/circle.svg';
import { ReactComponent as Icon12DropdownOutline } from 'icons/12/dropworn.svg';

import { Headline } from 'components/Typography/Headline/Headline';

export const SelectToken: FC<TSelectToken> = memo(({ token, className, onSelectedToken }) => (
  <div onClick={onSelectedToken} className={classNames('SelectToken', className)}>
    {token && (
      <img
        alt="Token logo"
        className="SelectToken__image"
        src={token.images[ETokenImages.SMALL]}
        srcSet={`${token.images[ETokenImages.SMALL]}, ${token.images[ETokenImages.SMALL_RETINA]} 2x`}
      />
    )}
    {!token && <Icon16CircleOutline className="SelectToken__fakeToken" />}
    <Headline className={classNames({
      'SelectToken__empty': !token,
      'SelectToken__text': !!token,
    })} weight="bold">{token?.ticker || 'TOKEN'}</Headline>
    {onSelectedToken && <Icon12DropdownOutline className="SelectToken__icon" />}
  </div>
));
