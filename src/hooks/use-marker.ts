import { useEffect, useState } from 'react';
import { MarkerData } from 'types/marker.type';
import useCompanyList from './api/company/use-company-list';

const useMarker = (map: kakao.maps.Map | undefined) => {
  const [markers, setMarkers] = useState<MarkerData[]>([]);
  const { data } = useCompanyList();

  useEffect(() => {
    if (!(map && data)) return;
    const gc = new kakao.maps.services.Geocoder();

    setMarkers([]);

    data.forEach(info => {
      gc.addressSearch(info.location, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const coords: MarkerData = {
            ...info,
            position: {
              lat: parseFloat(result[0].y),
              lng: parseFloat(result[0].x),
            },
          };

          if (markers === []) {
            // generate initial marker
            setMarkers([coords]);
          } else {
            setMarkers(prevState => [...prevState, coords]);
          }
        }
      });
    });
  }, [map, data]);

  return markers;
};

export default useMarker;
