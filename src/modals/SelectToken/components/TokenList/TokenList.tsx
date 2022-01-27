import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './TokenList.css';

import { TToken } from 'types/TToken';
import { router } from 'utils/router';
import { ETokenImages } from 'enums/ETokenImages';

import { selectTokens } from 'store/swap/selectors/selectTokens';
import { setExchangeFromToken } from 'store/swap/sets/setExchangeFromToken';
import { setExchangeToToken } from 'store/swap/sets/setExchangeToToken';
import { selectIsExchangeFrom } from 'store/router/selectors/routerParams/selectIsExchangeFrom';
import { requestExchangeRateSend } from 'store/sags/requestExchangeRate/requestExchangeRateSend';

import { TokenCell } from './components/TokenCell/TokenCell';

export const TokenList: FC = () => {
  const dispatch = useDispatch();

  const tokens = useSelector(selectTokens);
  const isFromSelectedToken = useSelector(selectIsExchangeFrom);

  const selectToken = (token: TToken) => {
    if (isFromSelectedToken) {
      dispatch(setExchangeFromToken(token));
    } else {
      dispatch(setExchangeToToken(token));
    }

    dispatch(requestExchangeRateSend());
    router.closeModal();
  }

  return (
    <ul className="TokenList">
      {tokens.map((token) => (
        <TokenCell
          key={token.ticker}
          onClick={() => selectToken(token)}
          ticker={token.ticker}
          name={token.name}
          imageSrc={token.images[ETokenImages.HUGE]}
          imageSrcSet={`${token.images[ETokenImages.HUGE]}, ${token.images[ETokenImages.HUGE_RETINA]} 2x`}
        />
      ))}
    </ul>
  );
}
