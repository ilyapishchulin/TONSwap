import { FC, memo } from 'react';
import { TTokenCell } from './TTokenCell';
import './TokenCell.css';

import { Subhead } from 'components/Typography/Subhead/Subhead';

export const TokenCell: FC<TTokenCell> = memo(({ imageSrc, imageSrcSet, ticker, name, onClick }) => (
  <li onClick={onClick} className="TokenCell">
    <img className="TokenCell__cover" alt="Token cover" src={imageSrc} srcSet={imageSrcSet} />
    <div className="TokenCellFields">
      <Subhead className="TokenCellFields__ticker" weight="bold">{ticker}</Subhead>
      <Subhead className="TokenCellFields__name" weight="medium">{name}</Subhead>
    </div>
  </li>
));
