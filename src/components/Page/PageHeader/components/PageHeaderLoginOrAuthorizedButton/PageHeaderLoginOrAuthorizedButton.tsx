import { FC } from 'react';
import { useSelector } from 'react-redux';

import { selectIsAuthorized } from 'store/user/selectors/selectIsAuthorized';

import { PageHeaderLoginButton } from './components/PageHeaderLoginButton/PageHeaderLoginButton';
import { PageHeaderAuthorizedButton } from './components/PageHeaderAuthorizedButton/PageHeaderAuthorizedButton';

export const PageHeaderLoginOrAuthorizedButton: FC = () => {
  const authorizedButton = useSelector(selectIsAuthorized);

  if (authorizedButton) {
    return <PageHeaderAuthorizedButton />;
  }

  return <PageHeaderLoginButton />
};

