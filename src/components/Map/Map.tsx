import { Map } from 'react-kakao-maps-sdk';

import { useState } from 'react';
import useMarker from 'hooks/use-marker';
import { SideBar } from 'components/SideBar';
import { MarkerList } from 'components/MarkerList';

interface MapProps {
  isSigned: boolean;
}

export const MapComponent: React.FC<MapProps> = ({ isSigned }) => {
  const [map, setMap] = useState<kakao.maps.Map | undefined>();
  const markers = useMarker(map);

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
        <SideBar isSigned={isSigned} />
      </Map>
    </>
  );
};
