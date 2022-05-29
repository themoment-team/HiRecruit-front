import { useState } from 'react';
import styled from '@emotion/styled';

import { SearchInput } from 'components/SearchInput';
import { UserList } from 'components/UserList';
import { Logo } from 'assets/Logo';
import pallete from 'shared/Pallete';
import Link from 'next/link';

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
  align-items: center;
  justify-content: space-between;
  background-color: ${pallete.scheme.blue};
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  backdrop-filter: saturate(180%) blur(20px);
`;

const SignUpAnchor = styled.a`
  color: ${pallete.scheme.white};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
`;

export const SideBarComponent: React.FC = () => {
  const [searchState, setSearchState] = useState<string>('');

  return (
    <SideBar>
      <NavBar>
        <Logo logoColor="white" />
        <Link href={`/auth/signup`} passHref>
          <SignUpAnchor>회원가입</SignUpAnchor>
        </Link>
      </NavBar>
      <SearchBar>
        <SearchInput setSearchState={setSearchState} />
        <UserList searchState={searchState} />
      </SearchBar>
    </SideBar>
  );
};
