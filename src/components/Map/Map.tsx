import { Map } from 'react-kakao-maps-sdk';

import { useState } from 'react';
import useMarker from 'hooks/use-marker';
import { SideBar } from 'components/SideBar';
import { MarkerList } from 'components/MarkerList';
import useCompanyList from 'hooks/api/company/use-company-list';

export const MapComponent: React.FC = () => {
  const [map, setMap] = useState<kakao.maps.Map | undefined>();
  const { data } = useCompanyList();

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
        <MarkerList markers={markers} />
        <SideBar />
      </Map>
    </>
  );
};
