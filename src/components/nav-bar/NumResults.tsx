import { IDataMovies } from '@/helpers/types';
import styles from './index.module.css';

interface IProps {
  movies: IDataMovies[];
}

const NumResults = ({ movies }: IProps) => {
  return (
    <p className={styles.num__results}>
      Found <b>{movies.length}</b> results
    </p>
  );
};

export default NumResults;
