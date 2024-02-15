import { useMapEvent } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';

const DetectClick = () => {
  const navigate = useNavigate();
  useMapEvent('click', (e) =>
    navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
  );

  return <></>;
};

export default DetectClick;