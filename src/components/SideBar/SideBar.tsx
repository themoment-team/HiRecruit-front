import styled from '@emotion/styled';

import { UserList } from 'components/UserList';

const SideBar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  width: 25rem;
  height: 100vh;
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255, 255, 255, 0.7);
`;

export const SideBarComponent: React.FC = ({ children }) => {
  return (
    <SideBar>
      <UserList />
    </SideBar>
  );
};
