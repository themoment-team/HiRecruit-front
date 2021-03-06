import styled from '@emotion/styled';

import pallete from 'shared/Pallete';

export const Input = styled.input`
  width: 100%;
  height: 2.75rem;
  border: none;
  font-size: 0.925rem;
  padding: 0.25rem 0.75rem;
  border-radius: 0.625rem;
  color: ${pallete.scheme.paragraph};
  caret-color: ${pallete.scheme.paragraph};
  font-weight: 500;
  &::placeholder {
    font-weight: initial;
    transition: opacity 0.18s;
  }
  &:focus {
    &::placeholder {
      opacity: 0;
    }
  }
`;
