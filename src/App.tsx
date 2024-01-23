import { useState } from 'react';
import Main from './components/main/Main';
import NavBar from './components/nav-bar/NavBar';

import './global.css';
import { tempMovieData, tempWatchedData } from './helpers/data';
import MovieList from './components/list/movie-list/MovieList';
import WatchedList from './components/list/watched-list/WatchedList';
import Search from './components/nav-bar/Search';
import NumResults from './components/nav-bar/NumResults';

function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  return (
    <>
      <NavBar>
        <Search />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <MovieList dataMovies={movies} />
        <WatchedList dataWatched={watched} />
      </Main>
    </>
  );
}

export default App;
