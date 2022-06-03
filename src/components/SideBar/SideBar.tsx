import { useState } from 'react';
import styled from '@emotion/styled';

import { SearchInput } from 'components/SearchInput';
import { WorkerList } from 'components/WorkerList';
import { Logo } from 'assets/Logo';
import pallete from 'shared/Pallete';
import { Modal } from 'components/common/Modal';
import { Form } from 'components/Form';

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
  border-top-left-radius: 0.875rem;
  border-top-right-radius: 0.875rem;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: saturate(180%) blur(20px);
`;

const NavBar = styled.nav`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${pallete.scheme.blue};
  border-bottom-left-radius: 0.875rem;
  border-bottom-right-radius: 0.875rem;
  backdrop-filter: saturate(180%) blur(20px);
`;

const SignUpAnchor = styled.a`
  color: ${pallete.scheme.white};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
`;

export const SideBarComponent: React.FC = () => {
  const [searchState, setSearchState] = useState<string>('');
  const [isSignUpFormModal, setIsSignUpFormModal] = useState<boolean>(false);

  return (
    <>
      <SideBar>
        <NavBar>
          <Logo logoColor="white" />
          <SignUpAnchor onClick={() => setIsSignUpFormModal(true)}>
            회원가입/로그인
          </SignUpAnchor>
        </NavBar>
        <SearchBar>
          <SearchInput setSearchState={setSearchState} />
          <WorkerList searchState={searchState} />
        </SearchBar>
      </SideBar>
      {isSignUpFormModal && (
        <Modal set={setIsSignUpFormModal}>
          <Form />
        </Modal>
      )}
    </>
  );
};
