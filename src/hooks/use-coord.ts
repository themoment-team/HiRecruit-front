import { useEffect, useState } from 'react';

interface coord {
  lat: number;
  lng: number;
}

const useCoord = (map: kakao.maps.Map | undefined, location: string) => {
  const [coord, setCoord] = useState<coord>();

  useEffect(() => {
    if (!map) return;
    const gc = new kakao.maps.services.Geocoder();

    gc.addressSearch(location, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setCoord({
          lat: parseFloat(result[0].y),
          lng: parseFloat(result[0].x),
        });
      }
    });
  }, [location, map]);

  return [coord?.lat, coord?.lng];
};

export default useCoord;
