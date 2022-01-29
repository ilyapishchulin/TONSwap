import { FC, memo } from 'react';
import { TPoolCell } from './TPoolCell';
import './PoolCell.css';

import { ETokenImages } from 'enums/ETokenImages';
import { classNames } from 'utils/classNames';

import { TableCellWrapper } from 'components/Tables/TableCellWrapper/TableCellWrapper';
import { TableCell } from 'components/Tables/TableCell/TableCell';
import { Text } from 'components/Typography/Text/Text';

export const PoolCell: FC<TPoolCell> = memo(({ liquidityFrom, liquidityTo, APY, volume, size }) => (
  <TableCellWrapper className="PoolCell">
    <TableCell removeSeparator>
      <div className="PoolCellToken">
        <img
          className="PoolCellToken__cover"
          alt="Token cover"
          src={liquidityFrom.images[ETokenImages.LARGE]}
          srcSet={`${liquidityFrom.images[ETokenImages.LARGE_RETINA]}, ${liquidityFrom.images[ETokenImages.LARGE_RETINA]} 2x`}
        />
        <img
          className="PoolCellToken__cover"
          alt="Token cover"
          src={liquidityTo.images[ETokenImages.LARGE]}
          srcSet={`${liquidityTo.images[ETokenImages.LARGE_RETINA]}, ${liquidityTo.images[ETokenImages.LARGE_RETINA]} 2x`}
        />
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
