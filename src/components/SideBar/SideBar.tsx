import { useState } from 'react';

import { SearchInput } from 'components/SearchInput';
import { WorkerList } from 'components/WorkerList';
import { Logo } from 'assets/icons/Logo';
import { Modal } from 'components/common/Modal';
import { CompanyForm } from 'components/CompanyForm';

import * as S from './SideBar.styles';

export const SideBarComponent: React.FC = () => {
  const [searchState, setSearchState] = useState<string>('');
  const [isSignUpFormModal, setIsSignUpFormModal] = useState<boolean>(false);
  const [isCompanyFormModal, setIsCompanyFormModal] = useState<boolean>(false);

  return (
    <>
      <S.SideBar>
        <S.NavBar>
          <Logo logoColor="white" />
          <S.SignUpAnchor onClick={() => setIsCompanyFormModal(true)}>
            회원가입/로그인
          </S.SignUpAnchor>
        </S.NavBar>
        <S.SearchBar>
          <SearchInput setSearchState={setSearchState} />
          <WorkerList searchState={searchState} />
        </S.SearchBar>
      </S.SideBar>
      {/* {isSignUpFormModal && (
        <Modal set={setIsSignUpFormModal}>
          <Form />
        </Modal>
      )} */}
      {isCompanyFormModal && (
        <Modal setModalVisible={setIsCompanyFormModal}>
          <CompanyForm />
        </Modal>
      )}
    </>
  );
};
