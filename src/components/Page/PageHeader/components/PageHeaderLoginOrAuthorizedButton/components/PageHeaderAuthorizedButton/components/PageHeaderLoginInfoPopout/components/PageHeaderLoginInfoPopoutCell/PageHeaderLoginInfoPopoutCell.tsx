import { FC } from 'react';
import { TPageHeaderLoginInfoPopoutCell } from './TPageHeaderLoginInfoPopoutCell';
import './PageHeaderLoginInfoPopoutCell.css';

import { Subhead } from 'components/Typography/Subhead/Subhead';

export const PageHeaderLoginInfoPopoutCell: FC<TPageHeaderLoginInfoPopoutCell> = ({ Icon, text, onClick }) => (
  <div onClick={onClick} className="PageHeaderLoginInfoPopoutCell">
    <Icon className="PageHeaderLoginInfoPopoutCell__icon" />
    <Subhead className="PageHeaderLoginInfoPopoutCell__text" weight="semibold">{text}</Subhead>
  </div>
);
