import { CustomOverlayMap, Map, MarkerClusterer } from 'react-kakao-maps-sdk';
import styled from '@emotion/styled';

import { Logo } from 'assets/Logo';
import { Marker } from 'components/Marker';

const LogoWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const MapComponent: React.FC = () => {
  return (
    <>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Map
        center={{
          lat: 36.658563176254795,
          lng: 127.86119616960151,
        }}
        style={{
          width: '100vw',
          height: '100vh',
        }}
        level={12}
      >
        <MarkerClusterer
          averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
          minLevel={10} // 클러스터 할 최소 지도 레벨
        >
          <CustomOverlayMap
            position={{
              lat: 33.55635,
              lng: 126.795841,
            }}
            xAnchor={0.5}
            yAnchor={1.1}
          >
            <Marker />
          </CustomOverlayMap>
        </MarkerClusterer>
      </Map>
    </>
  );
};
