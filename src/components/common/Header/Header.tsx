import { Dispatch, SetStateAction } from 'react';

import { Logo } from 'assets/icons/Logo';
import { Cancel } from 'assets/icons/Cancel';
import { Burger } from 'assets/icons/Burger';
import { UserRule } from 'types/site.type';

import * as S from './Header.styles';
import { handleAuth } from './container';

interface HeaderProps {
  userRules: UserRule;
  menuVisible: boolean;
  setMenuVisible: Dispatch<SetStateAction<boolean>>;
}

export const HeaderComponent: React.FC<HeaderProps> = ({
  userRules,
  menuVisible,
  setMenuVisible,
}) => {
  return (
    <S.Header>
      <Logo logoColor="blue" />
      {userRules === 'NO_AUTH_USER' ? (
        <S.HeaderAnchor onClick={() => handleAuth()}>
          회원가입/로그인
        </S.HeaderAnchor>
      ) : (
        <div
          onClick={() => {
            setMenuVisible(prev => !prev);
          }}
        >
          {menuVisible ? <Cancel /> : <Burger />}
        </div>
      )}
    </S.Header>
  );
};
