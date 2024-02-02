import { ICities } from '@/App';

import CountryItem, { IContry } from '../countries-item/CountryItem';
import Message from '../message/Message';
import Spinner from '../spinner/Spinner';
import styles from './index.module.css';

interface IState {
  cities: ICities[] | null;
  isLoading: boolean;
}

const CountriesList = ({ cities, isLoading }: IState) => {
  if (isLoading) return <Spinner />;

  if (cities === null || !cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries: IContry[] = cities.reduce(
    (acc: { country: string; emoji: string }[], city: ICities) => {
      if (!acc.map((el) => el.country).includes(city.country))
        return [...acc, { country: city.country, emoji: city.emoji }];
      else return acc;
    },
    []
  );

  return (
    <>
      <ul className={styles.countryList}>
        {countries.map((country) => {
          return <CountryItem country={country} key={country.country} />;
        })}
      </ul>
    </>
  );
};

export default CountriesList;
