import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './TokenList.css';

import { TToken } from 'types/TToken';
import { router } from 'utils/router';
import { ETokenImages } from 'enums/ETokenImages';

import { selectTokens } from 'store/swap/selectors/selectTokens';
import { selectCallbackFunction } from 'store/router/selectors/routerParams/selectCallbackFunction';
import { selectRequestFunction } from 'store/router/selectors/routerParams/selectRequestFunction';

import { TokenCell } from './components/TokenCell/TokenCell';

export const TokenList: FC = () => {
  const dispatch = useDispatch();

  const tokens = useSelector(selectTokens);
  const callbackFunction = useSelector(selectCallbackFunction);
  const requestFunction = useSelector(selectRequestFunction);

  const selectToken = (token: TToken) => {
    dispatch(callbackFunction(token));
    dispatch(requestFunction());
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
