import { FC, memo } from 'react';
import './CreateLiquidityFeeTierItem.css';
import { TCreateLiquidityFeeTierItem } from './TCreateLiquidityFeeTierItem';

import { classNames } from 'utils/classNames';

import { Text } from 'components/Typography/Text/Text';

export const CreateLiquidityFeeTierItem: FC<TCreateLiquidityFeeTierItem> = memo(({ onClick, active, number }) => (
  <div onClick={onClick} className={classNames('CreateLiquidityFeeTierItem', {
    'CreateLiquidityFeeTierItem--active': active,
  })}>
    <Text weight="semibold">{number}%</Text>
  </div>
));
