import { FC } from 'react';
import './SelectToken.css';

import { Headline } from 'components/Typography/Headline/Headline';
import { ReactComponent as Icon12DropdownOutline } from 'icons/12/dropworn.svg';

export const SelectToken: FC = () => (
  <div className="SelectToken">
    <img className="SelectToken__image" alt="Token logo" src="https://ton.org/img/logo.svg" />
    <Headline className="SelectToken__text" weight="bold">Ton</Headline>
    <Icon12DropdownOutline className="SelectToken__icon" />
  </div>
);
