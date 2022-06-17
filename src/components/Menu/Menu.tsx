import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { Modal } from 'components/common/Modal';

import * as S from './Menu.styles';
import { handleLogout } from './container';
import useModal from 'hooks/use-modal';
import toast from 'react-hot-toast';

interface MenuProps {
  setMenuVisible: Dispatch<SetStateAction<boolean>>;
  userRules: string;
}

type UserRuleOmitNoAuth = 'GUEST' | 'WORKER';

export const MenuComponent: React.FC<MenuProps> = ({
  setMenuVisible,
  userRules,
}) => {
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
    toast('기능 준비중입니다.');
  };

  return (
    <>
      <div ref={el}>
        <S.MenuWrapper>
          {
            {
              WORKER: (
                <>
                  <S.MenuListItem onClick={onInfoEdit}>
                    카드 등록하기
                  </S.MenuListItem>
                  <S.MenuListItemRed onClick={onLogout}>
                    로그아웃
                  </S.MenuListItemRed>
                </>
              ),
              GUEST: (
                <>
                  <S.MenuListItem onClick={onInfoEdit}>
                    내 정보 수정
                  </S.MenuListItem>
                  <S.MenuListItemRed onClick={onLogout}>
                    로그아웃
                  </S.MenuListItemRed>
                </>
              ),
            }[userRules as UserRuleOmitNoAuth]
          }
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
