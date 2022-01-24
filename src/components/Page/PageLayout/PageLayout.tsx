import { FC } from 'react';
import './PageLayout.css';

export const PageLayout: FC = ({ children }) => (
  <div className="PageLayout">
    {children}
  </div>
);
