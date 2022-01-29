import { FC } from 'react';
import { useSelector } from 'react-redux';
import './PageHeaderAuthorizedButton.css';

import { selectBalance } from 'store/user/selectors/selectBalance';
import { selectName } from 'store/user/selectors/selectName';

import { ReactComponent as Icon12DropdownOutline } from 'icons/12/dropworn.svg';

import { Subhead } from 'components/Typography/Subhead/Subhead';

export const PageHeaderAuthorizedButton: FC = () => {
  const balance = useSelector(selectBalance);
  const name = useSelector(selectName);

  return (
    <div className="PageHeaderAuthorizedButton">
      <Subhead className="PageHeaderAuthorizedButton__name" weight="bold">{name}</Subhead>
      <Subhead className="PageHeaderAuthorizedButton__balance" weight="bold">{balance['TON']} TON</Subhead>
      <Icon12DropdownOutline className="PageHeaderAuthorizedButton__icon" />
    </div>
  );
}