import { FC, memo, ElementType } from 'react';
import { TTitle } from './TTitle';
import './Title.css';

import { classNames } from 'utils/classNames';

export const Title: FC<TTitle> = memo(({ level, weight, children, className }) => {
  let TitleComponent = ("h" + level) as ElementType;

  return (
    <TitleComponent className={classNames('Title', {
      [`Title--level${level}`]: true,
      [`Title--${weight}`]: true,
    }, className)}>
      {children}
    </TitleComponent>
  );
});
