import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PoolStatisticSidebarButtons.css';

import { router } from 'utils/router';
import { EModals } from 'enums/EModals';
import { EPages } from 'enums/EPages';

import { selectIsAuthorized } from 'store/user/selectors/selectIsAuthorized';
import { selectCurrentPool } from 'store/currentPool/selectors/selectCurrentPool';
import { setFirstInPair } from 'store/liquidity/sets/setFirstInPair';
import { setSecondInPair } from 'store/liquidity/sets/setSecondInPair';

import { ReactComponent as Icon12PlusOutline } from 'icons/12/plus.svg';
import { ReactComponent as Icon12MinusOutline } from 'icons/12/minus.svg';

import { PoolStatisticSidebarButton } from './components/PoolStatisticSidebarButton';

export const PoolStatisticSidebarButtons: FC = () => {
  const dispatch = useDispatch();

  const isAuthorized = useSelector(selectIsAuthorized);
  const currentPool = useSelector(selectCurrentPool);

  if (!isAuthorized) {
    return null;
  }

  const fillLiquidity = () => {
    dispatch(setFirstInPair({
      depositCount: '',
      token: currentPool.firstPoolToken,
    }));
    dispatch(setSecondInPair({
      depositCount: '',
      token: currentPool.secondPoolToken,
    }));
  };

  const onClickRemove = () => {
    fillLiquidity();
    router.openModal(EModals.REMOVE_LIQUIDITY);
  };

  const onClickAdd = () => {
    fillLiquidity();
    router.openPage(EPages.CREATE_LIQUIDITY);
  };

  return (
    <div className="PoolStatisticSidebarButtons">
      <PoolStatisticSidebarButton onClick={onClickAdd} Icon={Icon12PlusOutline} text="Add" />
      <PoolStatisticSidebarButton onClick={onClickRemove} Icon={Icon12MinusOutline} text="Remove" />
    </div>
  );
}
