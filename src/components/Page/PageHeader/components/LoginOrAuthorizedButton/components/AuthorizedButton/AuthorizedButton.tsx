import { FC } from 'react';
import { useSelector } from 'react-redux';
import './AuthorizedButton.css';

import { selectBalance } from 'store/user/selectors/selectBalance';
import { selectName } from 'store/user/selectors/selectName';

import { ReactComponent as Icon12DropdownOutline } from 'icons/12/dropworn.svg';

import { Subhead } from 'components/Typography/Subhead/Subhead';

export const AuthorizedButton: FC = () => {
  const balance = useSelector(selectBalance);
  const name = useSelector(selectName);

  return (
    <div className="AuthorizedButton">
      <Subhead className="AuthorizedButton__name" weight="bold">{name}</Subhead>
      <Subhead className="AuthorizedButton__balance" weight="bold">{balance['TON']} TON</Subhead>
      <Icon12DropdownOutline className="AuthorizedButton__icon" />
    </div>
  );
}