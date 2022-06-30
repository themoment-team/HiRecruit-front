import styled from '@emotion/styled';

import pallete from 'shared/Pallete';

export const Header = styled.header`
  width: 100%;
  height: 4rem;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderAnchor = styled.a`
  color: ${pallete.scheme.blue};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
`;
