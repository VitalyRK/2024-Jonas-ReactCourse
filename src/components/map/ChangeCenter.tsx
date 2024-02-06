import { useMap } from 'react-leaflet';

import { LatLngExpression } from 'leaflet';

interface IProps {
  position: LatLngExpression;
}

const ChangeCenter = ({ position }: IProps) => {
  const map = useMap();
  map.setView(position);
  return null;
};

export default ChangeCenter;
