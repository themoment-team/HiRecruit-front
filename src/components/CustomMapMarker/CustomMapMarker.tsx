import { useRouter } from 'next/router';

import { Button } from 'components/common/Button';

import * as S from './CustomMapMarker.styles';
import { CustomOverlayMap } from 'react-kakao-maps-sdk';
import { useState } from 'react';
import { css } from '@emotion/react';

interface MarkerProps {
  companyName: string;
  companyUri: string;
  imageUri?: string;
  position: {
    lat: number;
    lng: number;
  };
}

export const CustomMapMarkerComponent: React.FC<MarkerProps> = ({
  companyName,
  companyUri,
  imageUri,
  position,
}) => {
  const router = useRouter();
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

  return (
    <CustomOverlayMap
      key={`${position.lat}-${position.lng}`}
      position={position}
      zIndex={isMouseOver ? 999 : 1}
      css={css`
        transform: translateY(calc(-50% - 8px));
      `}
    >
      <S.CustomMapMarker
        onMouseOver={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <div className="stilettos" />
        <S.ProfileImage>
          {imageUri ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageUri}
              alt={`${companyName} 회사 로고`}
              draggable="false"
            />
          ) : (
            <S.ProfileImageAltText>
              회사 이미지가 존재하지 않아요
            </S.ProfileImageAltText>
          )}
        </S.ProfileImage>
        <S.CompanyIntroBox>
          <article className="companyProfile">
            <p id="companyName">{companyName}</p>
            <a
              id="companyUri"
              target="_blank"
              href={companyUri}
              rel="noreferrer"
            >
              회사 웹사이트
            </a>
          </article>
        </S.CompanyIntroBox>
        <Button
          onClick={() => {
            router.push({
              pathname: router.pathname,
              query: { search: companyName },
            });
          }}
        >
          이 회사에 재직중인 사람들
        </Button>
      </S.CustomMapMarker>
    </CustomOverlayMap>
  );
};
