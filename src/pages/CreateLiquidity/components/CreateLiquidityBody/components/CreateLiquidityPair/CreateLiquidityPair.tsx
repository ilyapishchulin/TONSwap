import { FC } from 'react';
import { useSelector } from 'react-redux';
import './CreateLiquidityPair.css';

import { router } from 'utils/router';
import { EModals } from 'enums/EModals';

import { setTokenFirstInPair } from 'store/liquidity/sets/setTokenFirstInPair';
import { setTokenSecondInPair } from 'store/liquidity/sets/setTokenSecondInPair';
import { selectFirstInPair } from 'store/liquidity/selectors/selectFirstInPair';
import { selectSecondInPair } from 'store/liquidity/selectors/selectSecondInPair';
import { requestLiquidityDepositSend } from 'store/sags/requestLiquidityDeposit/requestLiquidityDepositSend';

import { ReactComponent as Icon20SwapOutline } from 'icons/20/swap.svg';

import { SelectToken } from 'components/Tokens/SelectToken/SelectToken';
import { Caption } from 'components/Typography/Caption/Caption';

export const CreateLiquidityPair: FC = () => {
  const firstInPair = useSelector(selectFirstInPair);
  const secondInPair = useSelector(selectSecondInPair);

  const selectToken = (isFirstInPair: boolean) => {
    router.openModal(EModals.SELECT_TOKEN, {
      callbackFunction: isFirstInPair ? setTokenFirstInPair : setTokenSecondInPair,
      requestFunction: requestLiquidityDepositSend,
    });
  };

  return (
    <div className="CreateLiquidityPair">
      <SelectToken token={firstInPair.token} onSelectedToken={() => selectToken(true)} />
      <div className="CreateLiquidityPairInfo">
        <Icon20SwapOutline className="CreateLiquidityPairInfo__icon" />
        <Caption className="CreateLiquidityPairInfo__text" weight="bold">Tokens pair</Caption>
      </div>
      <SelectToken token={secondInPair.token} onSelectedToken={() => selectToken(false)} />
    </div>
  );
}
