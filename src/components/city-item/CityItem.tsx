import { Link } from 'react-router-dom';

import { ICities } from '@/App';
import { formatDate } from '@/helpers';

import styles from './index.module.css';

interface IProps {
  city: ICities;
}

const CityItem = ({
  city: { cityName, emoji, date, id, position },
}: IProps) => {
  return (
    <li>
      <Link
        className={styles.cityItem}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
};

export default CityItem;
