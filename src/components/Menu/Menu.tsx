import { Dispatch, SetStateAction } from 'react';

import * as S from './Menu.styles';

interface MenuProps {
  setMenuVisible: Dispatch<SetStateAction<boolean>>;
}

export const MenuComponent: React.FC<MenuProps> = ({ setMenuVisible }) => {
  return (
    <S.MenuWrapper>
      <S.MenuListItem onClick={() => setMenuVisible(false)}>
        내 정보 수정
      </S.MenuListItem>
      <S.MenuListItemRed onClick={() => setMenuVisible(false)}>
        로그아웃
      </S.MenuListItemRed>
    </S.MenuWrapper>
  );
};
