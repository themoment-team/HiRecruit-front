import { Map } from 'react-kakao-maps-sdk';

import { useState } from 'react';
import useMarker from 'hooks/use-marker';
import { SideBar } from 'components/SideBar';
import { MarkerList } from 'components/MarkerList';
import { Launcher } from 'components/Launcher';
import defaultMapConfig from 'shared/DefaultMapConfig';

interface MapProps {
  cookies: {
    [key: string]: string;
  };
}

export const MapComponent: React.FC<MapProps> = ({ cookies }) => {
  const [map, setMap] = useState<kakao.maps.Map | undefined>();
  const markers = useMarker(map);

  return (
    <>
      <Map
        center={{
          lat: defaultMapConfig.lat,
          lng: defaultMapConfig.lng,
        }}
        style={{
          position: 'fixed',
          width: 'calc(100vw - 28rem)',
          height: '94vh',
          borderRadius: '3.125rem',
          top: '1.85rem',
          right: '2.2rem',
        }}
        onCreate={setMap}
        level={defaultMapConfig.level}
      >
        <MarkerList markers={markers} />
        <SideBar cookies={cookies} />
      </Map>
      <Launcher />
    </>
  );
};
