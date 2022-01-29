import { FC } from 'react';
import { useSelector } from 'react-redux';
import './PoolStatisticSidebarButtons.css';
import { PoolStatisticSidebarButton } from './components/PoolStatisticSidebarButton';

import { ReactComponent as Icon12PlusOutline } from 'icons/12/plus.svg';
import { ReactComponent as Icon12MinusOutline } from 'icons/12/minus.svg';
import { selectIsAuthorized } from 'store/user/selectors/selectIsAuthorized';

export const PoolStatisticSidebarButtons: FC = () => {
  const isAuthorized = useSelector(selectIsAuthorized);
  if (!isAuthorized) {
    return null;
  }

  return (
    <div className="PoolStatisticSidebarButtons">
      <PoolStatisticSidebarButton Icon={Icon12PlusOutline} text="Add" />
      <PoolStatisticSidebarButton Icon={Icon12MinusOutline} text="Remove" />
    </div>
  );
}
