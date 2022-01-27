import { FC } from 'react';
import { useSelector } from 'react-redux';

import { selectIsAuthorized } from 'store/user/selectors/selectIsAuthorized';

import { LoginButton } from './components/LoginButton/LoginButton';
import { AuthorizedButton } from './components/AuthorizedButton/AuthorizedButton';

export const LoginOrAuthorizedButton: FC = () => {
  const authorizedButton = useSelector(selectIsAuthorized);

  if (authorizedButton) {
    return <AuthorizedButton />;
  }

  return <LoginButton />
};

