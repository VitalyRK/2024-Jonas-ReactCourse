import { IDataMovies } from '@/helpers/types';

import styles from '../index.module.css';
import MovieItem from './MovieItem';

interface IProps {
  onSelected: (id: string) => void;
  dataMovies: IDataMovies[];
}

const MovieList = ({ dataMovies, onSelected }: IProps) => {
  return (
    <ul className={`${styles.list} ${styles.list__movies}`}>
      {dataMovies.map((movie) => (
        <MovieItem
          key={movie.imdbID}
          dataMovie={movie}
          onSelected={onSelected}
        />
      ))}
    </ul>
  );
};

export default MovieList;
