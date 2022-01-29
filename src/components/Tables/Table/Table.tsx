import { FC } from 'react';
import './Table.css';

export const Table: FC = ({ children }) => (
  <table className="Table">
    <tbody>
      {children}
    </tbody>
  </table>
);
