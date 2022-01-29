import { FC, memo } from 'react';
import { TPoolCell } from './TPoolCell';
import './PoolCell.css';

import { ETokenImages } from 'enums/ETokenImages';
import { classNames } from 'utils/classNames';

import { TableCellWrapper } from 'components/Tables/TableCellWrapper/TableCellWrapper';
import { TableCell } from 'components/Tables/TableCell/TableCell';
import { Text } from 'components/Typography/Text/Text';
import { TokenStack } from 'components/Tokens/TokenStack/TokenStack';

export const PoolCell: FC<TPoolCell> = memo(({ onClick, liquidityFrom, liquidityTo, APY, volume, size }) => (
  <TableCellWrapper onClick={onClick} className="PoolCell">
    <TableCell removeSeparator>
      <div className="PoolCellToken">
        <TokenStack firstToken={liquidityFrom} secondToken={liquidityTo} size={ETokenImages.LARGE} />
        <Text className="PoolCellToken__text" weight="bold">{liquidityFrom.ticker} + {liquidityTo.ticker}</Text>
      </div>
    </TableCell>
    <TableCell>
      <Text weight="semibold">{size}</Text>
    </TableCell>
    <TableCell>
      <Text weight="semibold">{volume}</Text>
    </TableCell>
    <TableCell removeSeparator className={classNames('PoolCellAPY', {
      [`PoolCellAPY--${APY > 0 ? 'positive' : 'negative'}`]: true,
    })}>
      <Text weight="semibold">{`${APY > 0 ? '+' : ''}${APY}%`}</Text>
    </TableCell>
  </TableCellWrapper>
));
