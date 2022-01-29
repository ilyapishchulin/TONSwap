import { FC } from 'react';
import { TTableCellWrapper } from './TTableCellWrapper';
import './TableCellWrapper.css';

import { classNames } from 'utils/classNames';

export const TableCellWrapper: FC<TTableCellWrapper> = ({ className, children }) => (
  <tr className={classNames('TableCellWrapper', className)}>
    {children}
  </tr>
);
