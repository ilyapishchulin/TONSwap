import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { requestAllLiquiditiesSend } from 'store/sags/requestAllLiquidities/requestAllLiquiditiesSend';
import { selectAllLiquidities } from 'store/liquidity/selectors/selectAllLiquidities';

import { Table } from 'components/Tables/Table/Table';
import { TableCellWrapper } from 'components/Tables/TableCellWrapper/TableCellWrapper';
import { TableHeader } from 'components/Tables/TableHeader/TableHeader';

import { Title } from 'components/Typography/Title/Title';
import { Subhead } from 'components/Typography/Subhead/Subhead';

import { PoolCell } from '../PoolCell/PoolCell';
import { PoolsSkeletons } from '../PoolsSkeletons/PoolsSkeletons';


export const AllPools: FC = () => {
  const dispatch = useDispatch();
  const allLiquidities = useSelector(selectAllLiquidities);

  useEffect(() => {
    if (typeof allLiquidities !== 'undefined') {
      return;
    }

    dispatch(requestAllLiquiditiesSend());
  }, [dispatch, allLiquidities]);

  if (!allLiquidities) {
    return <PoolsSkeletons />;
  }

  return (
    <Table>
      <TableCellWrapper>
        <TableHeader>
          <Title level="2" weight="extrabold">All Pools</Title>
        </TableHeader>
        <TableHeader>
          <Subhead weight="semibold">Size</Subhead>
        </TableHeader>
        <TableHeader>
          <Subhead weight="semibold">Vol/24h</Subhead>
        </TableHeader>
        <TableHeader>
          <Subhead weight="semibold">APY</Subhead>
        </TableHeader>
      </TableCellWrapper>
      {allLiquidities.map((liquidity) => <PoolCell key={liquidity.id} {...liquidity} />)}
    </Table>
  );
}
