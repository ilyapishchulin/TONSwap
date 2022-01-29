import { FC } from 'react';
import './FullCentredLayout.css';

export const FullCentredLayout: FC = ({ children }) => (
  <main className="FullCentredLayout">
    {children}
  </main>
);
