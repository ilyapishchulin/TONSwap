import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CreateLiquidityFooter.css';

import { router } from 'utils/router';
import { EModals } from 'enums/EModals';

import { selectIsAuthorized } from 'store/user/selectors/selectIsAuthorized';
import { selectFirstInPair } from 'store/liquidity/selectors/selectFirstInPair';
import { selectSecondInPair } from 'store/liquidity/selectors/selectSecondInPair';
import { requestAddLiquiditySend } from 'store/sags/requestAddLiquidity/requestAddLiquiditySend';

import { ReactComponent as Icon28SettingsOutline } from 'icons/28/settings.svg';
import { Text } from 'components/Typography/Text/Text';

export const CreateLiquidityFooter: FC = () => {
  const dispatch = useDispatch();
  const isAuthorized = useSelector(selectIsAuthorized);

  const firstInPair = useSelector(selectFirstInPair);
  const secondInPair = useSelector(selectSecondInPair);

  const getButtonText = (): string => {
    if (!isAuthorized) {
      return 'Connect wallet';
    }

    return 'Add';
  };

  const addLiquidity = () => {
    dispatch(requestAddLiquiditySend());
    router.closePage();
  };

  return (
    <footer className="CreateLiquidityFooter">
      <button onClick={() => router.openModal(EModals.SETTINGS)} className="CreateLiquidityFooterSettings">
        <Icon28SettingsOutline className="CreateLiquidityFooterSettings__icon" />
      </button>
      <button onClick={addLiquidity} disabled={!isAuthorized || !firstInPair || !secondInPair} className="CreateLiquidityFooterButton">
        <Text weight="bold">{getButtonText()}</Text>
      </button>
    </footer>
  );
}
