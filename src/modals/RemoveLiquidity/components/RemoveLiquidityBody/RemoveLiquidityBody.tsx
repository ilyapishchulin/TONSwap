import { ChangeEvent, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './RemoveLiquidityBody.css';

import { TokensPair } from 'components/Tokens/TokensPair/TokensPair';

import { setDepositCountInFirstPair } from 'store/liquidity/sets/setDepositCountInFirstPair';
import { setDepositCountInSecondPair } from 'store/liquidity/sets/setDepositCountInSecondPair';
import { requestLiquidityDepositSend } from 'store/sags/requestLiquidityDeposit/requestLiquidityDepositSend';
import { selectFirstInPair } from 'store/liquidity/selectors/selectFirstInPair';
import { selectSecondInPair } from 'store/liquidity/selectors/selectSecondInPair';

const DEPOSIT_INPUT_REGEX = '^[0-9.]*$';

export const RemoveLiquidityBody: FC = () => {
  const dispatch = useDispatch();

  const firstInPair = useSelector(selectFirstInPair);
  const secondInPair = useSelector(selectSecondInPair);

  const onChangePair = (e: ChangeEvent<HTMLInputElement>, isFirstPair: boolean) => {
    const { value } = e.currentTarget;
    if (!new RegExp(DEPOSIT_INPUT_REGEX).test(value)) {
      return;
    }

    dispatch(isFirstPair ? setDepositCountInFirstPair(value) : setDepositCountInSecondPair(value));
    dispatch(requestLiquidityDepositSend());
  };

  return (
    <main className="RemoveLiquidityBody">
      <TokensPair
        className="RemoveLiquidityBodyPair"
        onChangeFirstPair={(e) => onChangePair(e, true)}
        onChangeSecondPair={(e) => onChangePair(e, false)}
        firstInPair={firstInPair}
        secondInPair={secondInPair}
      />
    </main>
  );
}
