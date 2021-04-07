import React, { FunctionComponent, useState, useCallback } from 'react';
import styles from './Map.module.scss';

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

interface IMapProps {}

const Map: FunctionComponent<IMapProps> = () => {
  const containerStyle = {
    top: '7vh',
    width: '100%',
    height: '85vh'
  };

  const center = {
    lat: -3.745,
    lng: -38.523
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ''
  });

  const [map, setMap] = useState(null);
  console.log(map);

  const onLoad = useCallback((map) => {
    // const bounds = new window. .google.maps.LatLngBounds();
    // const bounds = new InfoWindow
    // map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback((map) => {
    setMap(null);
  }, []);

  return (
    <div className={styles.Map} id='info'>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={17}
          onLoad={onLoad}
          onUnmount={onUnmount}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Map;
