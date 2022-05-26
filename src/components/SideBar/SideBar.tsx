import { useState } from 'react';
import styled from '@emotion/styled';
import { SearchInput } from 'components/SearchInput';

import { UserList } from 'components/UserList';
import { Logo } from 'assets/Logo';
import pallete from 'shared/Pallete';

const SideBar = styled.div`
  position: fixed;
  top: 0;
  right: 0.5rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SearchBar = styled.div`
  width: 28rem;
  padding: 0 3.125rem;
  height: calc(100vh - 4rem);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: saturate(180%) blur(20px);
`;

const NavBar = styled.nav`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${pallete.scheme.blue};
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  backdrop-filter: saturate(180%) blur(20px);
`;

export const SideBarComponent: React.FC = () => {
  const [searchState, setSearchState] = useState<string>('');

  return (
    <SideBar>
      <NavBar>
        <Logo logoColor="white" />
      </NavBar>
      <SearchBar>
        <SearchInput setSearchState={setSearchState} />
        <UserList searchState={searchState} />
      </SearchBar>
    </SideBar>
  );
};
