import { useEffect, useState } from 'react';

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
  cookies: {
    [key: string]: string;
  };
}

type UserRule = 'GUEST' | 'WORKER' | 'NO_AUTH_USER';

export const SideBarComponent: React.FC<SideBarProps> = ({ cookies }) => {
  const [searchState, setSearchState] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [userRules, setUserRules] = useState<UserRule>('NO_AUTH_USER');

  useEffect(() => {
    const { USER_TYPE, HRSESSION } = cookies;

    if (USER_TYPE === 'GUEST' && HRSESSION) {
      setUserRules('GUEST');
    }

    if (USER_TYPE === 'WORKER' && HRSESSION) {
      setUserRules('WORKER');
    }
  }, []);

  return (
    <>
      <S.SideBar>
        <S.NavBar>
          <Logo logoColor="white" />
          {userRules === 'NO_AUTH_USER' ? (
            <S.SignUpAnchor onClick={() => handleAuth()}>
              회원가입/로그인
            </S.SignUpAnchor>
          ) : (
            <div
              onClick={() => {
                setMenuVisible(prev => !prev);
              }}
            >
              {menuVisible ? <Cancel /> : <Burger />}
            </div>
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
      {menuVisible && (
        <Menu setMenuVisible={setMenuVisible} userRules={userRules} />
      )}
    </>
  );
};
