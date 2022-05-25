import { Map, MapMarker } from 'react-kakao-maps-sdk';
import styled from '@emotion/styled';

import { Logo } from 'assets/Logo';
import { useState } from 'react';
import useMarker from 'hooks/use-marker';
import { UserData } from 'shared/Type';

const data: UserData[] = [
  {
    name: 'Berkley Mapam',
    imageUrl:
      'https://robohash.org/praesentiumautsimilique.png?size=50x50&set=set1',
    email: 'bmapam0@netscape.com',
    company: 'Ozu',
    introduction: 'Software Consultant',
    location: '서울 송파구 올림픽로300, 35층',
  },
  {
    name: 'Sianna Inde',
    imageUrl: 'https://robohash.org/odiosuntaut.png?size=50x50&set=set1',
    email: 'sinde1@canalblog.com',
    company: 'Brightdog',
    introduction: 'Quality Control Specialist',
    location: '서울 구로구 디지털로31길 53 1101호',
  },
  {
    name: 'Kelsey McMichan',
    imageUrl: 'https://robohash.org/doloresfugitet.png?size=50x50&set=set1',
    email: 'kmcmichan2@artisteer.com',
    company: 'Rhyzio',
    introduction: 'Technical Writer',
    location: '서울 강남구 삼성1동 봉은사로86길 6 (602호)',
  },
  {
    name: 'Kelsey McMichan',
    imageUrl: 'https://robohash.org/doloresfugitet.png?size=50x50&set=set1',
    email: 'kmcmichan2@artisteer.com',
    company: 'Rhyzio',
    introduction: 'Technical Writer',
    location:
      '대구광역시 동구 동대구로 461(신천동) (재)대구경북디자인센터 1004호 (주)페르소나',
  },
];

const LogoWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const MapComponent: React.FC = () => {
  const [map, setMap] = useState<kakao.maps.Map | undefined>();
  const markers = useMarker(data, map);

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
        onCreate={map => setMap(map)}
        level={12}
      >
        {markers.map((marker, i) => (
          <MapMarker key={i} position={marker.position} />
        ))}
      </Map>
    </>
  );
};
