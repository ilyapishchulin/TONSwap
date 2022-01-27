import { FC, memo } from 'react';
import { TSwapConfirmationButton } from './TSwapConfirmationButton';
import './SwapConfirmationButton.css';

import { classNames } from 'utils/classNames';
import { Text } from 'components/Typography/Text/Text';

export const SwapConfirmationButton: FC<TSwapConfirmationButton> = memo(({ onClick, mode }) => (
  <button onClick={onClick} className={classNames('SwapConfirmationButton', {
    [`SwapConfirmationButton--${mode}`]: true,
  })}>
    <Text weight="bold">{mode === 'cancel' ? 'Cancel' : 'Confirm'}</Text>
  </button>
));
