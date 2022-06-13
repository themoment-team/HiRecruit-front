import * as S from './Menu.styles';

export const MenuComponent: React.FC = () => {
  return (
    <S.MenuWrapper>
      <S.MenuListItem>내 정보 수정</S.MenuListItem>
      <S.MenuListItemRed>로그아웃</S.MenuListItemRed>
    </S.MenuWrapper>
  );
};
