import { IMovie } from '@/helpers/types';

interface IProps {
  dataWatched: IMovie;
  onDeleteWatched: (id: string) => void;
}

const WatchedItem = ({
  dataWatched: { imdbID, Title, Poster, imdbRating, userRating, Runtime },
  onDeleteWatched,
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
        cc
        <p>
          <span>⏳</span>
          <span>{Runtime} min</span>
        </p>
        <button className="btn-delete" onClick={() => onDeleteWatched(imdbID)}>
          X
        </button>
      </div>
    </li>
  );
};

export default WatchedItem;
