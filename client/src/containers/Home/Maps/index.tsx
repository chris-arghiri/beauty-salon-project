import React, { FunctionComponent, useCallback, useRef, useState } from 'react';
import styles from './Maps.module.scss';

import Footer from '../../../components/Footer';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from '@react-google-maps/api';
import { Libraries } from '@react-google-maps/api/dist/utils/make-load-script-url';

interface IMapsProps {}

const Maps: FunctionComponent<IMapsProps> = () => {
  const containerStyle = {
    top: '5vh',
    width: '100%',
    height: '94vh'
  };

  const center = {
    lat: 47.0186885,
    lng: 28.8269086
  };

  const libraries: Libraries = ['places'];
  const apiKey: string = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '';
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries
  });

  const mapRef = useRef();

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onMapUnmount = useCallback(() => {
    mapRef.current = undefined;
  }, []);

  const [isClosed, setIsClosed] = useState<boolean>(false);

  const handleMarkerClick = () => {
    setIsClosed(false);
  };

  const handleWindowClose = () => {
    setIsClosed(true);
  };

  return (
    <div className={styles.Maps} id='info'>
      {isLoaded ? (
        <GoogleMap
          onLoad={onMapLoad}
          onUnmount={onMapUnmount}
          mapContainerStyle={containerStyle}
          center={center}
          zoom={17}>
          <Marker
            clickable
            animation={1}
            position={center}
            onClick={handleMarkerClick}>
            {!isClosed && (
              <InfoWindow position={center} onCloseClick={handleWindowClose}>
                <h3>We're here!</h3>
              </InfoWindow>
            )}
          </Marker>
        </GoogleMap>
      ) : (
        <></>
      )}
      <Footer />
    </div>
  );
};

export default Maps;
