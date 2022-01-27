import { FC, memo } from 'react';
import { TCountingFields } from './TCountingFields';
import './CountingFields.css';

import { Subhead } from 'components/Typography/Subhead/Subhead';
import { Caption } from 'components/Typography/Caption/Caption';

export const CountingFields: FC<TCountingFields> = memo(({
  price,
  changePrice,
  changePriceMode,
  belowSelectTokenCaption,
}) => (
  <div className="CountingFields">
    <Subhead
      className="CountingFields__transfer"
      weight="semibold"
    >
      {price ? `$${price}` : ' '}
      {changePrice && price !== 0 && <span className={`CountingFields__transferMode--${changePriceMode}`}> {changePrice}</span>}
    </Subhead>
    <Caption className="CountingFields__after" weight="regular">
      {belowSelectTokenCaption}
    </Caption>
  </div>
));
