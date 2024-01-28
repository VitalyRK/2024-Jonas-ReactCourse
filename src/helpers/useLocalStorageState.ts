import { useEffect, useState } from "react";
import { IMovie } from "./types";

export function useLocalStorageState(initialState: IMovie[], key: string): [IMovie[], React.Dispatch<React.SetStateAction<IMovie[]>>
] {
  const [value, setValue] = useState<IMovie[]>(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}