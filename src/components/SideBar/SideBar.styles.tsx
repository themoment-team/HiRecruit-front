import styled from '@emotion/styled';

export const SideBar = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding-top: 0.75rem;
  gap: 0.5rem;
`;

export const SideBarWrapper = styled.div`
  width: 25rem;
  height: calc(100vh - 3rem);
`;
