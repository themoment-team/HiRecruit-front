import { Dispatch, SetStateAction, useEffect } from 'react';

import * as S from './Menu.styles';
import { handleLogout } from './container';
import useModal from 'hooks/use-modal';

interface MenuProps {
  setMenuVisible: Dispatch<SetStateAction<boolean>>;
  setEditModalVisible: Dispatch<SetStateAction<boolean>>;
  userRules: string;
}

type UserRuleOmitNoAuth = 'GUEST' | 'WORKER';

export const MenuComponent: React.FC<MenuProps> = ({
  setMenuVisible,
  userRules,
  setEditModalVisible,
}) => {
  const [el, clickOutside] = useModal(setMenuVisible);

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [clickOutside]);

  const onEditProfile = () => {
    setEditModalVisible(true);
  };

  const onLogout = () => {
    handleLogout();
  };

  return (
    <>
      <div ref={el}>
        <S.MenuWrapper>
          {
            {
              WORKER: (
                <>
                  <S.MenuListItem onClick={onEditProfile}>
                    프로필 수정하기
                  </S.MenuListItem>
                  <S.MenuListItemRed onClick={onLogout}>
                    로그아웃
                  </S.MenuListItemRed>
                </>
              ),
              GUEST: (
                <>
                  <S.MenuListItemRed onClick={onLogout}>
                    로그아웃
                  </S.MenuListItemRed>
                </>
              ),
            }[userRules as UserRuleOmitNoAuth]
          }
        </S.MenuWrapper>
      </div>
    </>
  );
};
