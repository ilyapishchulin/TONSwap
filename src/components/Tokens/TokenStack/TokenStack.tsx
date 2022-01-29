import { FC, memo } from 'react';
import { TTokenStack } from './TTokenStack';
import './TokenStack.css';

import { classNames } from 'utils/classNames';
import { ETokenImages } from 'enums/ETokenImages';

export const TokenStack: FC<TTokenStack> = memo(({ firstToken, secondToken, size }) => {
  const retinaSize = size.split('x').map((item: any) => item * 2).join('x') as ETokenImages;

  const stackOptionBySize = () => {
    switch (size) {
      case ETokenImages.BIG:
        return 'big';

      case ETokenImages.LARGE:
        return 'large';

      default:
        return 'small';
    }
  }

  return (
    <div className={classNames('TokenStack', {
      [`TokenStack--${stackOptionBySize()}`]: true,
    })}>
      <img
        className="TokenStack__cover"
        alt="Token cover"
        src={firstToken.images[size]}
        srcSet={`${firstToken.images[size]}, ${firstToken.images[retinaSize]} 2x`}
      />
      <img
        className="TokenStack__cover"
        alt="Token cover"
        src={secondToken.images[size]}
        srcSet={`${secondToken.images[size]}, ${secondToken.images[retinaSize]} 2x`}
      />
    </div>
  );
});
