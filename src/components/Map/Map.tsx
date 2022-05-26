import { Map } from 'react-kakao-maps-sdk';

import { useState } from 'react';
import { UserData } from 'shared/Type';
import useMarker from 'hooks/use-marker';
import { SideBar } from 'components/SideBar';
import { MarkerListComponent } from 'components/MarkerList/MarkerList';

const data: UserData[] = [
  {
    name: 'Berkley Mapam',
    imageUrl: 'https://github.com/sunwoo0706.png',
    email: 'bmapam0@netscape.com',
    company: 'Ozu',
    introduction: 'Software Consultant',
    location: '서울 송파구 올림픽로300, 35층',
    devYear: 7,
  },
  {
    name: 'Sianna Inde',
    imageUrl: 'https://github.com/siwony.png',
    email: 'sinde1@canalblog.com',
    company: 'Brightdog',
    introduction: 'Quality Control Specialist',
    location: '서울 구로구 디지털로31길 53 1101호',
    devYear: 7,
  },
  {
    name: 'Kelsey McMichan',
    imageUrl: 'https://github.com/jyeonjyan.png',
    email: 'kmcmichan2@artisteer.com',
    company: 'Rhyzio',
    introduction: 'Technical Writer',
    location: '서울 강남구 삼성1동 봉은사로86길 6 (602호)',
    devYear: 7,
  },
  {
    name: 'Kelsey McMichan',
    imageUrl: 'https://github.com/codnstj.png',
    email: 'kmcmichan2@artisteer.com',
    company: 'Rhyzio',
    introduction: 'Technical Writer',
    location:
      '대구광역시 동구 동대구로 461(신천동) (재)대구경북디자인센터 1004호',
    devYear: 7,
  },
  {
    name: 'Kelsey McMichan',
    imageUrl: 'https://github.com/hyeongrok7874.png',
    email: 'kmcmichan2@artisteer.com',
    company: 'Rhyzio',
    introduction: 'Technical Writer',
    location: '서울특별시 서초구 강남대로 311 드림플러스',
    devYear: 7,
  },
];

export const MapComponent: React.FC = () => {
  const [map, setMap] = useState<kakao.maps.Map | undefined>();
  const markers = useMarker(data, map);

  return (
    <>
      <Map
        center={{
          lat: 36.658563176254795,
          lng: 127.86119616960151,
        }}
        style={{
          width: '100vw',
          height: '100vh',
        }}
        onCreate={setMap}
        level={12}
      >
        <MarkerListComponent markers={markers} />
        <SideBar />
      </Map>
    </>
  );
};
