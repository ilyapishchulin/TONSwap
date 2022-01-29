import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { router } from 'utils/router';
import { EPages } from 'enums/EPages';

import { selectIsAuthorized } from 'store/user/selectors/selectIsAuthorized';
import { requestLoginSend } from 'store/sags/requestLogin/requestLoginSend';

import { ReactComponent as Icon20LoginOutline } from 'icons/20/login.svg';
import { ReactComponent as Icon12PlusOutline } from 'icons/12/plus.svg';

import { LiquidityPlaceholder } from './components/LiquidityPlaceholder/LiquidityPlaceholder';

export const PoolsYourLiquidity: FC = () => {
  const dispatch = useDispatch();
  const isAuthorized = useSelector(selectIsAuthorized);

  if (!isAuthorized) {
    const connectWallet = () => {
      dispatch(requestLoginSend());
    };

    return (
      <LiquidityPlaceholder
        buttonText="Connect wallet"
        placeholderText="Connect your wallet to start the journey!"
        Icon={Icon20LoginOutline}
        onClick={connectWallet}
      />
    );
  }

  return (
    <LiquidityPlaceholder
      buttonText="Add"
      placeholderText="You have no liquidity."
      Icon={Icon12PlusOutline}
      onClick={() => router.openPage(EPages.CREATE_LIQUIDITY)}
    />
  );
};

