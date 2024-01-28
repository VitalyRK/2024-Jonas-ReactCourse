import { average } from '@/helpers/functions';
import { IMovie } from '@/helpers/types';

import styles from '../index.module.css';

interface IProps {
  dataWatched: IMovie[];
}

const Summary = ({ dataWatched }: IProps) => {
  const avgImdbRating = average(
    dataWatched.map((movie) => Number(movie.imdbRating))
  );
  const avgUserRating = average(
    dataWatched.map((movie) => Number(movie.userRating))
  );
  const avgRuntime = average(dataWatched.map((movie) => Number(movie.Runtime)));

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
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime.toFixed(0)} min</span>
        </p>
      </div>
    </div>
  );
};

export default Summary;
