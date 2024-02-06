import { Link } from 'react-router-dom';

import { useCities } from '@/context/CitiesContext';
import { flagemojiToPNG, formatDate } from '@/helpers';
import { ICities } from '@/types';

import styles from './index.module.css';

interface IProps {
  city: ICities;
}

const CityItem = ({
  city: { cityName, emoji, date, id, position },
}: IProps) => {
  const { currentCity, deleteCity } = useCities();
  const emojiConvert = flagemojiToPNG(emoji);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    deleteCity(id!);
  };

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${id === currentCity?.id ? styles['cityItem--active'] : ''}`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emojiConvert}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
};

export default CityItem;
