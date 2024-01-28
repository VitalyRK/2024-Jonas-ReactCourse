import { useEffect, useState } from 'react';
import Main from './components/main/Main';
import NavBar from './components/nav-bar/NavBar';

import './global.css';
import MovieList from './components/list/movie-list/MovieList';
import Search from './components/nav-bar/Search';
import NumResults from './components/nav-bar/NumResults';
import Loader from './components/loader/Loader';
import Box from './components/main/Box';
import MovieDetails from './components/movie-details/MovieDetails';
import { IMovie } from './helpers/types';
import WatchedList from './components/list/watched-list/WatchedList';
import ErrorMessage from './components/error/ErrorMessage';
import { useMovies } from './helpers/useMovies';
import { useLocalStorageState } from './helpers/useLocalStorageState';

function App() {
  const [query, setQuery] = useState('');
  const { movies, isLoading, error } = useMovies(query);

  const [selectedID, setSelectedID] = useState<null | string>(null);

  const [watched, setWatched] = useLocalStorageState([], 'watched');

  function handleSelected(id: string) {
    setSelectedID((selectedID) => (id === selectedID ? null : id));
  }

  function handleCloseMovie() {
    setSelectedID(null);
  }

  function handleAddWatched(movie: IMovie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id: string) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <>
      <NavBar>
        <Search query={query} onInput={setQuery} />
        {error ? (
          <ErrorMessage message={error} />
        ) : (
          <NumResults movies={movies} />
        )}
      </NavBar>
      <Main>
        <Box>
          {isLoading ? (
            <Loader />
          ) : (
            <MovieList onSelected={handleSelected} dataMovies={movies} />
          )}
        </Box>
        <Box>
          {selectedID ? (
            <MovieDetails
              selectedID={selectedID}
              onClose={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <WatchedList
              dataWatched={watched}
              onDeleteWatched={handleDeleteWatched}
            />
          )}
        </Box>
      </Main>
    </>
  );
}

export default App;
