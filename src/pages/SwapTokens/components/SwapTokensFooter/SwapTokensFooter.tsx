import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SwapTokensFooter.css';

import { router } from 'utils/router';
import { EModals } from 'enums/EModals';

import { selectExchangeFrom } from 'store/swap/selectors/selectExchangeFrom';
import { selectExchangeTo } from 'store/swap/selectors/selectExchangeTo';
import { setExchangeFrom } from 'store/swap/sets/setExchangeFrom';
import { setExchangeTo } from 'store/swap/sets/setExchangeTo';
import { selectIsAuthorized } from 'store/user/selectors/selectIsAuthorized';
import { selectBalance } from 'store/user/selectors/selectBalance';

import { ReactComponent as Icon28ReverseOutline } from 'icons/28/reverse.svg';
import { ReactComponent as Icon28SettingsOutline } from 'icons/28/settings.svg';

import { SwapTokensIconButton } from './components/SwapTokensIconButton/SwapTokensIconButton';
import { SwapTokensButton } from './components/SwapTokensButton/SwapTokensButton';

export const SwapTokensFooter: FC = () => {
  const dispatch = useDispatch();

  const exchangeFrom = useSelector(selectExchangeFrom);
  const exchangeTo = useSelector(selectExchangeTo);
  const isAuthorized = useSelector(selectIsAuthorized);
  const balance = useSelector(selectBalance);

  const swapTokensPosition = () => {
    dispatch(setExchangeFrom(exchangeTo));
    dispatch(setExchangeTo(exchangeFrom));
  };

  const openConfirmationModal = () => {
    router.openModal(EModals.SWAP_CONFIRMATION);
  };

  const tokenBalance = balance[exchangeFrom.token?.ticker || ''];
  const isEnoughFunds = tokenBalance >= Number(exchangeFrom.exchangeCount) && tokenBalance !== 0;
  const getButtonName = () => {
    if (!isAuthorized) {
      return 'Wallet not connected';
    }

    if (exchangeFrom.exchangeCount !== '' && !isEnoughFunds) {
      return 'Not enough funds';
    }

    return 'Swap';
  };

  const isTokenEmpty = !exchangeTo.token || !exchangeFrom.token;
  const isPriceEmpty = !exchangeFrom.exchangeCount || !exchangeTo.exchangeCount;

  return (
    <footer className="SwapTokensFooter">
      <SwapTokensIconButton onClick={swapTokensPosition} Icon={Icon28ReverseOutline} />
      <SwapTokensIconButton onClick={() => router.openModal(EModals.SETTINGS)} Icon={Icon28SettingsOutline} />
      <SwapTokensButton
        onClick={openConfirmationModal}
        name={getButtonName()}
        disabled={!isAuthorized || isTokenEmpty || isPriceEmpty || !isEnoughFunds}
      />
    </footer>
  );
}
