import { FC } from 'react';
import './MiddleLayout.css';

export const MiddleLayout: FC = ({ children }) => (
  <main className="MiddleLayoutWrapper">
    <section className="MiddleLayout">
      {children}
    </section>
  </main>
);
