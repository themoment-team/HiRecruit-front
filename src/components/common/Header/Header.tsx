import { Dispatch, SetStateAction } from 'react';
import toast from 'react-hot-toast';

import { Logo } from 'assets/icons/Logo';
import { Cancel } from 'assets/icons/Cancel';
import { Burger } from 'assets/icons/Burger';
import axiosClient from 'libs/axios/axiosClient';
import { workerUrl } from 'libs/api/apiUrlControllers';
import { UserRule } from 'types/site.type';

import * as S from './Header.styles';
import { handleAuth, handleLogout } from './container';
import { AxiosError } from 'axios';
import Link from 'next/link';
import { useMap } from 'react-kakao-maps-sdk';
import defaultMapConfig from 'shared/DefaultMapConfig';

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
  const map = useMap();

  const handleMenuClick = () => {
    axiosClient
      .get(workerUrl.getMeWorker())
      .then(function () {
        setMenuVisible(true);
      })
      .catch(function (error: AxiosError) {
        if (error?.response?.status === 401) {
          toast.error(
            '로그인 정보가 일치하지 않아요\n자동으로 로그아웃 됩니다',
          );
          handleLogout();
        } else {
          setMenuVisible(true);
        }
      });
  };

  const clickLogo = () => {
    const moveCoord = new kakao.maps.LatLng(
      defaultMapConfig.lat,
      defaultMapConfig.lng,
    );

    map.setLevel(defaultMapConfig.level);
    map.panTo(moveCoord);
  };

  return (
    <S.Header>
      <Link href="/" passHref>
        <a onClick={clickLogo}>
          <Logo logoColor="blue" />
        </a>
      </Link>
      {userRules === 'NO_AUTH_USER' ? (
        <S.HeaderAnchor onClick={() => handleAuth()}>
          회원가입/로그인
        </S.HeaderAnchor>
      ) : (
        <div onClick={() => handleMenuClick()}>
          {menuVisible ? <Cancel /> : <Burger />}
        </div>
      )}
    </S.Header>
  );
};
