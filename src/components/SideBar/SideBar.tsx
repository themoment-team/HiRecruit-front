import { useState } from 'react';
import styled from '@emotion/styled';
import { SearchInput } from 'components/SearchInput';

import { UserList } from 'components/UserList';

const SearchBar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  width: 28rem;
  padding: 0 3.125rem;
  height: 100vh;
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255, 255, 255, 0.7);
`;

export const SideBarComponent: React.FC = () => {
  const [searchState, setSearchState] = useState<string>('');

  return (
    <>
      <SearchBar>
        <SearchInput setSearchState={setSearchState} />
        <UserList searchState={searchState} />
      </SearchBar>
    </>
  );
};
