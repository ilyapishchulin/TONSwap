import { FC } from 'react';
import './TableHeader.css';

export const TableHeader: FC = ({ children }) => (
  <th className="TableHeader">
    {children}
  </th>
);
