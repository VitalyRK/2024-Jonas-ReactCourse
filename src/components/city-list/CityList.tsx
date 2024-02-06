import { useCities } from '@/context/CitiesContext';

import CityItem from '../city-item/CityItem';
import Message from '../message/Message';
import Spinner from '../spinner/Spinner';
import styles from './index.module.css';

const CityList = () => {
  const { isLoading, cities } = useCities();

  if (isLoading) return <Spinner />;

  if (cities === null || !cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <>
      <ul className={styles.cityList}>
        {cities &&
          cities.map((city) => {
            return <CityItem city={city} key={city.id} />;
          })}
      </ul>
    </>
  );
};

export default CityList;
