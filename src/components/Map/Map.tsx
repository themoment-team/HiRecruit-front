import { Map } from 'react-kakao-maps-sdk';

import { useState } from 'react';
import { UserData } from 'types/worker.type';
import useMarker from 'hooks/use-marker';
import { SideBar } from 'components/SideBar';
import { MarkerList } from 'components/MarkerList';
import { CompanyData } from 'types/company.type';

const data: UserData[] = [
  {
    workerId: 12,
    name: 'Berkley Mapam',
    email: 'bmapam0@netscape.com',
    introduction: '안녕하세요 정시원입니다.',
    profileImgUri: 'https://github.com/sunwoo0706.png',
    devYear: 7,
    position: '서울 송파구 올림픽로300, 35층',
    company: {
      companyId: 12,
      name: 'Ozu',
      location: '서울 송파구 올림픽로300, 35층',
      homepageUri: 'https://www.ozu.ac.kr/',
      companyImgUri: 'https://avatars.githubusercontent.com/u/62932968?v=4',
    },
  },
];

const companyData: CompanyData[] = [
  {
    companyId: 12,
    name: 'Ozu',
    location: '서울 송파구 올림픽로300, 35층',
    homepageUri: 'https://www.ozu.ac.kr/',
    companyImgUri: 'https://github.com/sunwoo0706.png',
  },
];

export const MapComponent: React.FC = () => {
  const [map, setMap] = useState<kakao.maps.Map | undefined>();
  const markers = useMarker(companyData, map);

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
        <MarkerList markers={markers} />
        <SideBar />
      </Map>
    </>
  );
};
