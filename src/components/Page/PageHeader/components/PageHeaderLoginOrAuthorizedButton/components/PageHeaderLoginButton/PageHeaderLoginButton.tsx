import { FC } from 'react';
import { useDispatch } from 'react-redux';
import './PageHeaderLoginButton.css';

import { requestLoginSend } from 'store/sags/requestLogin/requestLoginSend';

import { ReactComponent as Icon20LoginOutline } from 'icons/20/login.svg';
import { Text } from 'components/Typography/Text/Text';

export const PageHeaderLoginButton: FC = () => {
  const dispatch = useDispatch();

  const connectWallet = () => {
    dispatch(requestLoginSend());
  };

  return (
    <button onClick={connectWallet} className="PageHeaderLoginButton">
      <Icon20LoginOutline />
      <Text weight="bold" className="PageHeaderLoginButton__text">Connect wallet</Text>
    </button>
  );
}
