import { IWatchedMovies } from '@/helpers/types';

interface IProps {
  dataWatched: IWatchedMovies;
}

const WatchedItem = ({
  dataWatched: { Title, Poster, imdbRating, userRating, runtime },
}: IProps) => {
  return (
    <li>
      <img src={Poster} alt={`${Title} poster`} />
      <h3>{Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{runtime} min</span>
        </p>
      </div>
    </li>
  );
};

export default WatchedItem;
