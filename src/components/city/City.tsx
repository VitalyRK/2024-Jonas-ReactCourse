import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useCities } from '@/context/CitiesContext';
import { flagemojiToPNG, formatDate } from '@/helpers';

import ButtonBack from '../button/ButtonBack';
import Spinner from '../spinner/Spinner';
import styles from './index.module.css';

const City = () => {
  const { id } = useParams();
  const { getCity, currentCity, isLoading } = useCities();
  useEffect(() => {
    if (id) getCity(id);
  }, [id, getCity]);

  if (!currentCity) return;

  const { cityName, emoji, date, notes } = currentCity;
  const emojiConvert = flagemojiToPNG(emoji);

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emojiConvert}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <ButtonBack />
      </div>
    </div>
  );
};

export default City;
