import { FC } from 'react';
import './LoginButton.css';

import { ReactComponent as Icon20LoginOutline } from 'icons/20/login.svg';
import { Text } from 'components/Typography/Text/Text';

export const LoginButton: FC = () => (
  <button className="LoginButton">
    <Icon20LoginOutline />
    <Text weight="bold" className="LoginButton__text">Connect wallet</Text>
  </button>
);
