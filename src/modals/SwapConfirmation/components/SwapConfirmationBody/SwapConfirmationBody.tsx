import { FC } from 'react';
import { useSelector } from 'react-redux';

import { selectExchangeFrom } from 'store/swap/selectors/selectExchangeFrom';
import { selectExchangeTo } from 'store/swap/selectors/selectExchangeTo';

import { SwapConfirmationCell } from './components/SwapConfirmationCell/SwapConfirmationCell';
import { SwapConfirmationTokenCell } from './components/SwapConfirmationTokenCell/SwapConfirmationTokenCell';
import { SwapConfirmationButtons } from './components/SwapConfirmationButtons/SwapConfirmationButtons';

export const SwapConfirmationBody: FC = () => {
  const exchangeFrom = useSelector(selectExchangeFrom);
  const exchangeTo = useSelector(selectExchangeTo);

  if (!exchangeFrom.token || !exchangeTo.token) {
    return null;
  }

  return (
    <main>
      <SwapConfirmationTokenCell
        top="Swap"
        token={exchangeFrom.token}
        exchangeCount={exchangeFrom.exchangeCount}
      />
      <SwapConfirmationTokenCell
        top="For"
        token={exchangeTo.token}
        exchangeCount={exchangeTo.exchangeCount}
      />
      <SwapConfirmationCell before="Fee" after="$32.12" />
      <SwapConfirmationCell before="Minimum received" after="0.133135 ETH" />
      <SwapConfirmationCell before="Fee" after="0.5%" />
      <SwapConfirmationButtons />
    </main>
  );
}
