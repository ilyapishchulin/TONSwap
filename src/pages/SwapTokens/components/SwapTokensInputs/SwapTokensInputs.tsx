import { FC, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { router } from 'utils/router';
import { EModals } from 'enums/EModals';

import { selectExchangeFrom } from 'store/swap/selectors/selectExchangeFrom';
import { selectExchangeTo } from 'store/swap/selectors/selectExchangeTo';
import { setExchangeCountTo } from 'store/swap/sets/setExchangeCountTo';
import { setExchangeCountFrom } from 'store/swap/sets/setExchangeCountFrom';
import { requestExchangeRateSend } from 'store/sags/requestExchangeRate/requestExchangeRateSend';
import { selectIsAuthorized } from 'store/user/selectors/selectIsAuthorized';
import { selectBalance } from 'store/user/selectors/selectBalance';
import { setExchangeFromToken } from 'store/swap/sets/setExchangeFromToken';
import { setExchangeToToken } from 'store/swap/sets/setExchangeToToken';

import { TokenInput } from './components/TokenInput/TokenInput';

export const SwapTokensInputs: FC = () => {
  const dispatch = useDispatch();

  const exchangeFrom = useSelector(selectExchangeFrom);
  const exchangeTo = useSelector(selectExchangeTo);
  const balance = useSelector(selectBalance);
  const isAuthorized = useSelector(selectIsAuthorized);

  const onSelectToken = (e: MouseEvent<HTMLDivElement>, isExchangeFrom: boolean) => {
    e.preventDefault();
    router.openModal(EModals.SELECT_TOKEN, {
      callbackFunction: isExchangeFrom ? setExchangeFromToken : setExchangeToToken,
      requestFunction: requestExchangeRateSend,
    });
  };

  const onExchangeCountChange = (exchangeCount: string, isExchangeFrom: boolean) => {
    if (isExchangeFrom) {
      dispatch(setExchangeCountFrom(exchangeCount));
    } else {
      dispatch(setExchangeCountTo(exchangeCount));
    }

    dispatch(requestExchangeRateSend());
  };

  const getChangePriceModeByPrice = () => {
    return exchangeTo.change >= 0 ? 'positive' : 'negative';
  };

  const getChangePriceText = () => {
    const { price, change } = exchangeTo;
    if (change === 0){
      return '';
    }

    const percent = change * 100 / price;
    return `(${change > 0 ? '+' : '-'}$${change.toString().replace('-', '')} · ${percent.toFixed(2).toString().replace('-', '')}%)`;
  };

  const getBelowSelectTokenCaption = (isExchangeFrom: boolean): string => {
    if (!isAuthorized) {
      return '';
    }

    const { token } = isExchangeFrom ? exchangeFrom : exchangeTo;
    if (typeof token === 'undefined') {
      return 'Select token';
    }

    return `Balance: ${balance[token.ticker]} ${token.ticker.toUpperCase()}`
  };

  return (
    <main>
      <TokenInput
        price={exchangeFrom.price}
        token={exchangeFrom.token}
        exchangeCount={exchangeFrom.exchangeCount}
        onExchangeCountChange={(exchangeCount) => onExchangeCountChange(exchangeCount, true)}
        belowSelectTokenCaption={getBelowSelectTokenCaption(true)}
        onSelectedToken={(e) => onSelectToken(e, true)}
      />
      <TokenInput
        price={exchangeTo.price}
        token={exchangeTo.token}
        exchangeCount={exchangeTo.exchangeCount}
        changePrice={getChangePriceText()}
        changePriceMode={getChangePriceModeByPrice()}
        onExchangeCountChange={(exchangeCount) => onExchangeCountChange(exchangeCount, false)}
        belowSelectTokenCaption={getBelowSelectTokenCaption(false)}
        onSelectedToken={(e) => onSelectToken(e, false)}
      />
    </main>
  );
}
