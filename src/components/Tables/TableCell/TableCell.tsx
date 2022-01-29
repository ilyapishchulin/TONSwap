import { FC } from 'react';
import { TTableCell } from './TTableCell';
import './TableCell.css';

import { classNames } from 'utils/classNames';

export const TableCell: FC<TTableCell> = ({ removeSeparator, disableDefault, className, children }) => (
  <td className={classNames('TableCell', {
    'TableCell--removeSeparator': removeSeparator,
    'TableCell--disableDefault': disableDefault,
  }, className)}>
    {children}
    {!removeSeparator && <div className="TableCell__separator" />}
  </td>
);
