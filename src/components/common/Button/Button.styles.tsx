import styled from '@emotion/styled';

import pallete from 'shared/Pallete';

export const Button = styled.button`
  border: none;
  width: 100%;
  height: 2.275rem;
  text-align: center;
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: 0.563rem;
  cursor: pointer;
  color: ${pallete.scheme.white};
  background-color: ${pallete.scheme.blue};
  &:active {
    transform: scale(0.98);
  }
`;
