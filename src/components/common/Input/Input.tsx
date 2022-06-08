import { forwardRef, InputHTMLAttributes } from 'react';

import * as S from './Input.styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

// eslint-disable-next-line react/display-name
export const InputComponent = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return <S.Input {...props} ref={ref} />;
  },
);
