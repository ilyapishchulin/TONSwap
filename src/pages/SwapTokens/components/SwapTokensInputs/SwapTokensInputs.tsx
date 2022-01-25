import { FC } from 'react';
import { useSelector } from 'react-redux';

import { router } from 'utils/router';
import { EModals } from 'enums/EModals';

import { selectFromToken } from 'store/swap/selectors/selectFromToken';
import { selectToToken } from 'store/swap/selectors/selectToToken';

import { TokenInput } from './components/TokenInput/TokenInput';

export const SwapTokensInputs: FC = () => {
  const fromToken = useSelector(selectFromToken);
  const toToken = useSelector(selectToToken);

  return (
    <main>
      <TokenInput
        token={fromToken}
        onSelectedToken={() => router.openModal(EModals.SELECT_TOKEN, { isFromSelectedToken: true })}
      />
      <TokenInput
        token={toToken}
        onSelectedToken={() => router.openModal(EModals.SELECT_TOKEN, { isFromSelectedToken: false })}
      />
    </main>
  );
}
