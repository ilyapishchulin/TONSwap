import { ChangeEvent, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CreateLiquidityDeposit.css';

import { selectFirstInPair } from 'store/liquidity/selectors/selectFirstInPair';
import { selectSecondInPair } from 'store/liquidity/selectors/selectSecondInPair';
import { setDepositCountInFirstPair } from 'store/liquidity/sets/setDepositCountInFirstPair';
import { setDepositCountInSecondPair } from 'store/liquidity/sets/setDepositCountInSecondPair';
import { requestLiquidityDepositSend } from 'store/sags/requestLiquidityDeposit/requestLiquidityDepositSend';

import { TokensPair } from 'components/Tokens/TokensPair/TokensPair';
import { Headline } from 'components/Typography/Headline/Headline';

const DEPOSIT_INPUT_REGEX = '^[0-9.]*$';

export const CreateLiquidityDeposit: FC = () => {
  const dispatch = useDispatch();

  const firstInPair = useSelector(selectFirstInPair);
  const secondInPair = useSelector(selectSecondInPair);

  const isValid = (value: string): boolean => {
    return new RegExp(DEPOSIT_INPUT_REGEX).test(value);
  }

  const onChangePair = (e: ChangeEvent<HTMLInputElement>, isFirstPair: boolean) => {
    const { value } = e.currentTarget;
    if (!isValid(value)) {
      return;
    }

    dispatch(isFirstPair ? setDepositCountInFirstPair(value) : setDepositCountInSecondPair(value));
    dispatch(requestLiquidityDepositSend());
  };

  return (
    <div className="CreateLiquidityDeposit">
      <Headline className="CreateLiquidityDeposit__text" weight="semibold">Deposit</Headline>
      <TokensPair
        className="CreateLiquidityDepositPair"
        onChangeFirstPair={(e) => onChangePair(e, true)}
        onChangeSecondPair={(e) => onChangePair(e, false)}
        firstInPair={firstInPair}
        secondInPair={secondInPair}
      />
    </div>
  );
}
