import { IDataMovies } from '@/helpers/types';

import styles from '../index.module.css';
import MovieItem from './MovieItem';

interface IProps {
  dataMovies: IDataMovies[];
}

const MovieList = ({ dataMovies }: IProps) => {
  return (
    <ul className={styles.list}>
      {dataMovies.map((movie) => (
        <MovieItem key={movie.imdbID} dataMovie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
