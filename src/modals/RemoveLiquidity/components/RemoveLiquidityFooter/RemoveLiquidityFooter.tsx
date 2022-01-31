import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './RemoveLiquidityFooter.css';

import { router } from 'utils/router';

import { selectFirstInPair } from 'store/liquidity/selectors/selectFirstInPair';
import { selectSecondInPair } from 'store/liquidity/selectors/selectSecondInPair';
import { requestRemoveLiquiditySend } from 'store/sags/requestRemoveLiquidity/requestRemoveLiquiditySend';

import { Headline } from 'components/Typography/Headline/Headline';

export const RemoveLiquidityFooter: FC = () => {
  const dispatch = useDispatch();

  const firstPair = useSelector(selectFirstInPair);
  const secondPair = useSelector(selectSecondInPair);

  const requestRemoveLiquidity = () => {
    dispatch(requestRemoveLiquiditySend());
    router.closeModal();
  };

  return (
    <footer>
      <button onClick={requestRemoveLiquidity} className="RemoveLiquidityFooterButton" disabled={!firstPair.depositCount || !secondPair.depositCount}>
        <Headline className="RemoveLiquidityFooterButton__text" weight="bold">Remove</Headline>
      </button>
    </footer>
  );
};
