import { IMovie } from '@/helpers/types';

import styles from '../index.module.css';
import Summary from './Summary';
import WatchedItem from './WatchedItem';

interface IProps {
  dataWatched: IMovie[];
  onDeleteWatched: (id: string) => void;
}

const WatchedList = ({ dataWatched, onDeleteWatched }: IProps) => {
  return (
    <>
      <Summary dataWatched={dataWatched} />

      <ul className={styles.list}>
        {dataWatched.map((movie) => (
          <WatchedItem
            key={movie.imdbID}
            dataWatched={movie}
            onDeleteWatched={onDeleteWatched}
          />
        ))}
      </ul>
    </>
  );
};

export default WatchedList;
