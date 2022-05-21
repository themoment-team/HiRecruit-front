import styled from '@emotion/styled';

import pallete from 'shared/Pallete';

export const ButtonComponent = styled.button<{ secondary?: boolean }>`
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
  ${({ secondary }) =>
    secondary &&
    `
      background-color: ${pallete.scheme.white};
      color: ${pallete.scheme.blue};
      border: 2px solid ${pallete.scheme.blue};
    `};
  &:active {
    transform: scale(0.98);
  }
`;
