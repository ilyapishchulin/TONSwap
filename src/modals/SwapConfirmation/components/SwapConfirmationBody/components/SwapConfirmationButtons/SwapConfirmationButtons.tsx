import { FC } from 'react';
import { useDispatch } from 'react-redux';
import './SwapConfirmationButtons.css';

import { router } from 'utils/router';

import { setExchangeTo } from 'store/swap/sets/setExchangeTo';
import { defaultExchangeData } from 'store/swap/swapStore';
import { setExchangeFrom } from 'store/swap/sets/setExchangeFrom';
import { requestConfirmTransactionSend } from 'store/sags/requestConfirmTransaction/requestConfirmTransactionSend';

import { SwapConfirmationButton } from './components/SwapConfirmationButton/SwapConfirmationButton';

export const SwapConfirmationButtons: FC = () => {
  const dispatch = useDispatch();

  const onSave = () => {
    dispatch(requestConfirmTransactionSend());

    dispatch(setExchangeTo(defaultExchangeData));
    dispatch(setExchangeFrom(defaultExchangeData));

    router.closeModal();
  };

  return (
    <div className="SwapConfirmationButtons">
      <SwapConfirmationButton onClick={router.closeModal} mode="cancel" />
      <SwapConfirmationButton onClick={onSave} mode="confirm" />
    </div>
  );
}