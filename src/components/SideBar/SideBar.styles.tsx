import styled from '@emotion/styled';

import pallete from 'shared/Pallete';

export const SideBar = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SideBarWrapper = styled.div`
  width: 25rem;
  height: calc(100vh - 3rem);
`;

export const SideBarHeader = styled.header`
  padding: 1.5rem 1.5rem 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SignUpAnchor = styled.a`
  color: ${pallete.scheme.blue};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
`;
