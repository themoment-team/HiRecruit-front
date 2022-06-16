import { useState } from 'react';

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
