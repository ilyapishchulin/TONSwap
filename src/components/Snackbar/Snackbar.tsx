import { FC, memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TSnackbar } from './TSnackbar';
import './Snackbar.css';

import { classNames } from 'utils/classNames';
import { setSnackbarNotification } from 'store/router/sets/setSnackbarNotification';

import { Text } from 'components/Typography/Text/Text';

const SNACKBAR_TIME_TO_READ = 3500;
const SNACKBAR_END_ANIMATION_TIME = 500;

export const Snackbar: FC<TSnackbar> = memo(({ Icon, iconClass, className, title, description }) => {
  const dispatch = useDispatch();
  const [endAnimation, setEndAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setEndAnimation(true);
      setTimeout(() => dispatch(setSnackbarNotification(undefined)), SNACKBAR_END_ANIMATION_TIME);
    }, SNACKBAR_TIME_TO_READ);
  }, [dispatch]);

  return (
    <div className={classNames('Snackbar', {
      'Snackbar--endAnimation': endAnimation,
    }, className)}>
      <div className={classNames('Snackbar__before', iconClass)}>
        <Icon />
      </div>
      <div className="SnackbarFields">
        <Text className="SnackbarFields__title" weight="bold">{title}</Text>
        <Text className="SnackbarFields__description" weight="semibold">{description}</Text>
      </div>
    </div>
  );
});
