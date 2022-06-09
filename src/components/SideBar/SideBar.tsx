import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { SearchInput } from 'components/SearchInput';
import { WorkerList } from 'components/WorkerList';
import { Form } from 'components/Form';
import { Modal } from 'components/common/Modal';
import { Logo } from 'assets/icons/Logo';

import * as S from './SideBar.styles';
import { handleAuth } from './container';

export const SideBarComponent: React.FC = () => {
  const [searchState, setSearchState] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    if (router.query.is_first) {
      setModalVisible(true);
    }
  }, [router.query.is_first]);

  return (
    <>
      <S.SideBar>
        <S.NavBar>
          <Logo logoColor="white" />
          <S.SignUpAnchor onClick={() => handleAuth()}>
            회원가입/로그인
          </S.SignUpAnchor>
        </S.NavBar>
        <S.SearchBar>
          <SearchInput setSearchState={setSearchState} />
          <WorkerList searchState={searchState} />
        </S.SearchBar>
      </S.SideBar>
      {modalVisible && (
        <Modal setModalVisible={setModalVisible}>
          <Form setSignUpFormVisible={setModalVisible} />
        </Modal>
      )}
    </>
  );
};
