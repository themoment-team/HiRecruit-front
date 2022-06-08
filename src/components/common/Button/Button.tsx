import { ButtonHTMLAttributes } from 'react';

import * as S from './Button.styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonComponent: React.FC<ButtonProps> = props => {
  return <S.Button {...props} />;
};
