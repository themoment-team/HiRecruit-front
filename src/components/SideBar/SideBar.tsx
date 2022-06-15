import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { SearchInput } from 'components/SearchInput';
import { WorkerList } from 'components/WorkerList';
import { Modal } from 'components/common/Modal';
import { Menu } from 'components/Menu';
import { Form } from 'components/Form';
import { Burger } from 'assets/icons/Burger';
import { Cancel } from 'assets/icons/Cancel';
import { Logo } from 'assets/icons/Logo';

import * as S from './SideBar.styles';
import { handleAuth } from './container';

interface SideBarProps {
  isSigned: boolean;
}

export const SideBarComponent: React.FC<SideBarProps> = ({ isSigned }) => {
  const [searchState, setSearchState] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    if (router.query.is_first === 'true') {
      setModalVisible(true);
    }
  }, [router.query.is_first]);

  // TODO: 서버 레거시 코드에 대응하기 위한 코드 추후 삭제해야됨
  useEffect(() => {
    if (router.query.is_login) {
      router.replace(router.pathname);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.is_login]);

  return (
    <>
      <S.SideBar>
        <S.NavBar>
          <Logo logoColor="white" />
          {isSigned ? (
            <div
              onClick={() => {
                setMenuVisible(prev => !prev);
              }}
            >
              {menuVisible ? <Cancel /> : <Burger />}
            </div>
          ) : (
            <S.SignUpAnchor onClick={() => handleAuth()}>
              회원가입/로그인
            </S.SignUpAnchor>
          )}
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
      {menuVisible && <Menu setMenuVisible={setMenuVisible} />}
    </>
  );
};
