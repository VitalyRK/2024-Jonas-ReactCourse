import { ICities } from '@/App';

import CityItem from '../city-item/CityItem';
import Message from '../message/Message';
import Spinner from '../spinner/Spinner';
import styles from './index.module.css';

interface IState {
  cities: ICities[] | null;
  isLoading: boolean;
}

const CityList = ({ cities, isLoading }: IState) => {
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
