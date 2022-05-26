import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';

import { useState } from 'react';
import { UserData } from 'shared/Type';
import useMapLevel from 'hooks/use-map-level';
import useMarker from 'hooks/use-marker';
import { CustomMapMarker } from 'components/CustomMapMarker';

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
      '대구광역시 동구 동대구로 461(신천동) (재)대구경북디자인센터 1004호',
  },
  {
    name: 'Kelsey McMichan',
    imageUrl: 'https://robohash.org/doloresfugitet.png?size=50x50&set=set1',
    email: 'kmcmichan2@artisteer.com',
    company: 'Rhyzio',
    introduction: 'Technical Writer',
    location: '서울특별시 서초구 강남대로 311 드림플러스',
  },
];

export const MapComponent: React.FC = () => {
  const [map, setMap] = useState<kakao.maps.Map | undefined>();
  const markers = useMarker(data, map);
  const level = useMapLevel(map);

  const panTo = (lat: number, lng: number) => {
    if (map) {
      const moveCoord = new kakao.maps.LatLng(lat, lng);

      map.setLevel(3);
      map.panTo(moveCoord);
    }
  };

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
        {markers.map((marker, i) =>
          level > 3 ? (
            <MapMarker
              key={i}
              position={marker.position}
              onClick={() => panTo(marker.position.lat, marker.position.lng)}
            />
          ) : (
            <CustomOverlayMap position={marker.position}>
              <CustomMapMarker
                companyName={marker.name}
                companyUrl={marker.imageUrl}
                imageUrl={marker.imageUrl}
              />
            </CustomOverlayMap>
          ),
        )}
      </Map>
    </>
  );
};
