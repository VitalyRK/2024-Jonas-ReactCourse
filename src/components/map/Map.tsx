import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import { LatLngExpression } from 'leaflet';

import { useCities } from '@/context/CitiesContext';
import { flagemojiToPNG } from '@/helpers';
import { useGeolocation } from '@/hooks/useGeolocation';
import { useUrlPosition } from '@/hooks/useUrlPosition';

import Button from '../button/Button';
import ChangeCenter from './ChangeCenter';
import DetectClick from './DetectClick';
import styles from './index.module.css';

const Map = () => {
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState<LatLngExpression>([40, 0]);
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();
  const [mapLat, mapLng] = useUrlPosition();

  useEffect(() => {
    if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
  }, [mapLat, mapLng]);

  useEffect(() => {
    if (geolocationPosition)
      setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
  }, [geolocationPosition]);

  return (
    <div className={styles.mapContainer}>
      {!geolocationPosition && (
        <Button typeStyle="position" onClick={getPosition}>
          {isLoadingPosition ? 'Loading...' : 'Use your position'}
        </Button>
      )}
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities &&
          cities.map(({ position, id, emoji, cityName }) => {
            return (
              <Marker key={id} position={[position.lat, position.lng]}>
                <Popup>
                  <span>{flagemojiToPNG(emoji)}</span>
                  <span>{cityName}</span>
                </Popup>
              </Marker>
            );
          })}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
};

export default Map;
