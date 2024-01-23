import { IWatchedMovies } from '@/helpers/types';

import styles from '../index.module.css';
import Summary from './Summary';
import WatchedItem from './WatchedItem';

interface IProps {
  dataWatched: IWatchedMovies[];
}

const WatchedList = ({ dataWatched }: IProps) => {
  return (
    <>
      <Summary dataWatched={dataWatched} />

      <ul className={styles.list}>
        {dataWatched.map((movie) => (
          <WatchedItem key={movie.imdbID} dataWatched={movie} />
        ))}
      </ul>
    </>
  );
};

export default WatchedList;
