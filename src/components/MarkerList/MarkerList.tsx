import { CustomMapMarker } from 'components/CustomMapMarker';
import useMapLevel from 'hooks/use-map-level';
import { CustomOverlayMap, MapMarker, useMap } from 'react-kakao-maps-sdk';

interface MarkerListComponentProps {
  markers: any[];
}

export const MarkerListComponent: React.FC<MarkerListComponentProps> = ({
  markers,
}) => {
  const map = useMap();
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
      {markers.map((marker, i) =>
        level > 3 ? (
          <MapMarker
            key={i}
            position={marker.position}
            onClick={() => panTo(marker.position.lat, marker.position.lng)}
          />
        ) : (
          <CustomOverlayMap key={i} position={marker.position}>
            <CustomMapMarker
              companyName={marker.name}
              companyUri={marker.homepageUri}
              imageUri={marker.companyImgUri}
            />
          </CustomOverlayMap>
        ),
      )}
    </>
  );
};
