const API_KEY = '95d148d6';

interface IAPIData {
  Response: string;
  Search: {
    Poster: string;
    Title: string;
    Type?: string;
    Year: string;
    imdbID: string;
  }
  totalResults: string;
}

export const getData = async (query: string, controller: AbortController) => {
  const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`, {
    signal: controller.signal
  });
  if (!res.ok) throw new Error('Something went wrong');
  const data = await res.json();
  return data;
}

export const getMovieByID = async (id: string) => {
  const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
  if (!res.ok) throw new Error('Something went wrong');
  const data = await res.json();
  return data;
}

