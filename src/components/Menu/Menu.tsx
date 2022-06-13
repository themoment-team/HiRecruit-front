import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { Modal } from 'components/common/Modal';

import * as S from './Menu.styles';
import { handleLogout } from './container';
import useModal from 'hooks/use-modal';

interface MenuProps {
  setMenuVisible: Dispatch<SetStateAction<boolean>>;
}

export const MenuComponent: React.FC<MenuProps> = ({ setMenuVisible }) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [el, clickOutside] = useModal(setMenuVisible);

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [clickOutside]);

  const onLogout = () => {
    handleLogout();
  };

  const onInfoEdit = () => {
    setModalVisible(true);
  };

  return (
    <>
      <div ref={el}>
        <S.MenuWrapper>
          <S.MenuListItem onClick={onInfoEdit}>내 정보 수정</S.MenuListItem>
          <S.MenuListItemRed onClick={onLogout}>로그아웃</S.MenuListItemRed>
        </S.MenuWrapper>
      </div>
      {modalVisible && (
        <Modal setModalVisible={setModalVisible}>
          <div>asdf</div>
        </Modal>
      )}
    </>
  );
};
