import { flagemojiToPNG } from '@/helpers';

import styles from './index.module.css';

interface IProps {
  country: IContry;
}

export interface IContry {
  country: string;
  emoji: string;
}

const CountryItem = ({ country }: IProps) => {
  return (
    <li className={styles.countryItem}>
      <span>{flagemojiToPNG(country.emoji)}</span>
      <span>{country.country}</span>
    </li>
  );
};

export default CountryItem;
