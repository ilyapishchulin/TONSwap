import { HTMLAttributes } from 'react';

export type TTableCell = HTMLAttributes<HTMLTableCellElement> & {
  disableDefault?: boolean;
  removeSeparator?: boolean;
};
