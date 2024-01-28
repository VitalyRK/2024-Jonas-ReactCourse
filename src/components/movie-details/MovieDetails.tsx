import { useEffect, useState } from 'react';
import styles from './index.module.css';
import { getMovieByID } from '@/api/API';
import Loader from '../loader/Loader';
import StarRating from '../star-rating/StarRating';
import { IMovie } from '@/helpers/types';
import { useKey } from '@/helpers/useKey';

interface IProps {
  selectedID: string;
  onClose: () => void;
  onAddWatched: (movie: IMovie) => void;
  watched: IMovie[];
}

const MovieDetails = ({
  selectedID,
  onClose,
  onAddWatched,
  watched,
}: IProps) => {
  const [movie, setMovie] = useState<IMovie | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedID);
  const watchedUserRating = watched.find((movie) => movie.imdbID === selectedID)
    ?.userRating;

  // const {
  //   Title: title,
  //   Year: year,
  //   Poster: poster,
  //   Runtime: runtime,
  //   imdbRating,
  //   Plot: plot,
  //   Released: released,
  //   Actors: actors,
  //   Director: director,
  //   Genre: genre,
  // } = movie;

  useKey('Escape', onClose);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data = await getMovieByID(selectedID);
      setMovie(data);
      setIsLoading(false);
    })();
  }, [selectedID]);

  useEffect(() => {
    if (movie?.Title === undefined) return;
    document.title = `Movie | ${movie?.Title}`;

    return function () {
      document.title = 'usePoncorn';
    };
  }, [movie?.Title]);

  function handleAdd() {
    if (movie !== null) {
      if (userRating === 0) {
        alert('You rated this movie a 0. Are you sure?');
        return;
      }
      const newWatchedMovie = {
        ...movie,
        Runtime: movie.Runtime.split(' ')[0].toString(),
        userRating,
      };

      onAddWatched(newWatchedMovie);
      onClose();
    }
  }

  return (
    <div className={styles.details}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className={styles.btn__back} onClick={onClose}>
              &lt;
            </button>
            <img src={movie?.Poster} alt={`Poster of ${movie?.Title} movie`} />
            <div className={styles.details__overview}>
              <h2>{movie?.Title}</h2>
              <p>
                {movie?.Released} &bull; {movie?.Runtime}
              </p>
              <p>{movie?.Genre}</p>
              <p>
                <span>⭐️</span>
                {movie?.imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <section>
            <div className={styles.rating}>
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={23}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className={styles.btn__add} onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You rated with movie {watchedUserRating} <span>⭐️</span>
                </p>
              )}
            </div>
            <p>
              <em>{movie?.Plot}</em>
            </p>
            <p>Starring {movie?.Actors}</p>
            <p>Directed by {movie?.Director}</p>
          </section>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
