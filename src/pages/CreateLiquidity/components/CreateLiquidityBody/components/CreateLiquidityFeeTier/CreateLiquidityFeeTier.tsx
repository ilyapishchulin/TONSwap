import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CreateLiquidityFeeTier.css';

import { EFeeTiers } from 'enums/EFeeTiers';

import { selectFeeTier } from 'store/settings/selectors/selectFeeTier';
import { setFeeTier } from 'store/settings/sets/setFeeTier';

import { Headline } from 'components/Typography/Headline/Headline';
import { CreateLiquidityFeeTierItem } from './components/CreateLiquidityFeeTierItem/CreateLiquidityFeeTierItem';
import { CreateLiquidityFeeTierItems } from './components/CreateLiquidityFeeTierItems/CreateLiquidityFeeTierItems';

export const CreateLiquidityFeeTier: FC = () => {
  const dispatch = useDispatch();
  const feeTier = useSelector(selectFeeTier)

  const onSelectTier = (tier: EFeeTiers) => {
    dispatch(setFeeTier(tier));
  };

  return (
    <div className="CreateLiquidityFeeTier">
      <Headline className="CreateLiquidityFeeTier__text" weight="semibold">Fee tier</Headline>
      <CreateLiquidityFeeTierItems>
        {Object.values(EFeeTiers).map((item) => (
          <CreateLiquidityFeeTierItem
            key={item}
            active={feeTier === item}
            number={item}
            onClick={() => onSelectTier(item)}
          />
        ))}
      </CreateLiquidityFeeTierItems>
    </div>
  );
}
