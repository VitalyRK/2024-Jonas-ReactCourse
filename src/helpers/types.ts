export interface IDataMovies {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export interface IWatchedMovies extends IDataMovies {
  runtime: number;
  imdbRating: number;
  userRating: number;
}
