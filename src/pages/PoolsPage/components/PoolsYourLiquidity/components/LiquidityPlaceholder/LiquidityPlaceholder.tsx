import { FC } from 'react';
import { TLiquidityPlaceholder } from './TLiquidityPlaceholder';
import './LiquidityPlaceholder.css';

import { Table } from 'components/Tables/Table/Table';
import { TableCellWrapper } from 'components/Tables/TableCellWrapper/TableCellWrapper';
import { TableHeader } from 'components/Tables/TableHeader/TableHeader';
import { TableCell } from 'components/Tables/TableCell/TableCell';

import { Title } from 'components/Typography/Title/Title';
import { Text } from 'components/Typography/Text/Text';

export const LiquidityPlaceholder: FC<TLiquidityPlaceholder> = ({
  Icon,
  placeholderText,
  buttonText,
  onClick,
}) => (
  <Table>
    <TableCellWrapper>
      <TableHeader>
        <Title level="2" weight="extrabold">Your Liquidity</Title>
      </TableHeader>
    </TableCellWrapper>
    <TableCellWrapper>
      <TableCell removeSeparator disableDefault className="LiquidityPlaceholderLogin">
        <Text className="LiquidityPlaceholderLogin__text" weight="regular">{placeholderText}</Text>
        <button onClick={onClick} className="LiquidityPlaceholderLoginButton">
          <Icon className="LiquidityPlaceholderLoginButton__icon" />
          <Text weight="bold">{buttonText}</Text>
        </button>
      </TableCell>
    </TableCellWrapper>
  </Table>
);
