import { average } from '@/helpers/functions';
import { IWatchedMovies } from '@/helpers/types';

import styles from '../index.module.css';

interface IProps {
  dataWatched: IWatchedMovies[];
}

const Summary = ({ dataWatched }: IProps) => {
  const avgImdbRating = average(
    dataWatched.map((movie) => Number(movie.imdbID))
  );
  const avgUserRating = average(
    dataWatched.map((movie) => Number(movie.userRating))
  );
  const avgRuntime = average(dataWatched.map((movie) => Number(movie.runtime)));

  return (
    <div className={styles.summary}>
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{dataWatched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
};

export default Summary;
