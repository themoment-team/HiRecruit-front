import { Map } from 'react-kakao-maps-sdk';

import { useEffect, useState } from 'react';
import { WorkerData } from 'types/worker.type';
import useMarker from 'hooks/use-marker';
import { SideBar } from 'components/SideBar';
import { MarkerList } from 'components/MarkerList';
import useCompanyList from 'hooks/api/company/use-company-list';

interface MapProps {
  workerList: WorkerData[];
}

export const MapComponent: React.FC<MapProps> = ({ workerList }) => {
  const [map, setMap] = useState<kakao.maps.Map | undefined>();
  const companyData = useCompanyList();

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
