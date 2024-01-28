import { useEffect, useState } from "react";
import { useDebounce } from "./debounce";
import { getData } from "@/api/API";

export function useMovies(query: string) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const debounced = useDebounce(query);

  useEffect(() => {
    const controller = new AbortController();
    if (debounced.length > 2) {
      // callback();

      (async () => {
        try {
          setIsLoading(true);
          setError(null);

          const data = await getData(debounced, controller);
          if (data.Response === 'False') {
            throw new Error(data.Error);
          } else {
            setMovies(data.Search);
            setError('');
          }
        } catch (err) {
          if (err instanceof Error && err.name !== 'AbortError') {
            setError(err.message);
            setMovies([]);
          }
        } finally {
          setIsLoading(false);
        }
      })();
    }

    return function () {
      controller.abort();
    };
  }, [debounced]);

  return { movies, isLoading, error }
}