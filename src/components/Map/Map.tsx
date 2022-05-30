import { Map } from 'react-kakao-maps-sdk';

import { useState } from 'react';
import { WorkerData } from 'types/worker.type';
import useMarker from 'hooks/use-marker';
import { SideBar } from 'components/SideBar';
import { MarkerList } from 'components/MarkerList';
import { CompanyData } from 'types/company.type';

interface MapProps {
  workerList: WorkerData[];
}

const companyData: CompanyData[] = [
  {
    companyId: 12,
    name: 'Ozu',
    location: '서울 송파구 올림픽로300, 35층',
    homepageUri: 'https://www.ozu.ac.kr/',
    companyImgUri: 'https://github.com/sunwoo0706.png',
  },
];

export const MapComponent: React.FC<MapProps> = ({ workerList }) => {
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
        <SideBar workerList={workerList} />
      </Map>
    </>
  );
};
