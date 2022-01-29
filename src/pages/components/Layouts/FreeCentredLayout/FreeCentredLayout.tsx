import { FC } from 'react';
import { TFreeCentredLayout } from './TFreeCentredLayout';
import './FreeCentredLayout.css';

export const FreeCentredLayout: FC<TFreeCentredLayout> = ({ children }) => (
  <main className="FreeCentredLayoutWrapper">
    <section className="FreeCentredLayout">
      {children}
    </section>
  </main>
);
