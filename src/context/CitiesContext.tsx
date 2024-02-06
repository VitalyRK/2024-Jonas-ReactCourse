import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from 'react';

import { ICities } from '@/types';

interface ICitiesContext {
  cities: ICities[] | null;
  isLoading: boolean;
  currentCity: ICities | null;
  error: string;
  getCity: (id: string) => Promise<void>;
  createCity: (newCity: ICities) => Promise<void>;
  deleteCity: (id: string) => Promise<void>;
}

interface IState {
  cities: ICities[] | null;
  isLoading: boolean;
  currentCity: ICities | null;
  error: string;
}

export const BASE_URL = 'http://localhost:8000';

const CitiesContext = createContext<ICitiesContext | null>(null);

const initialState: IState = {
  cities: [],
  isLoading: false,
  currentCity: null,
  error: '',
};

export type Action =
  | { type: 'cities/loaded'; payload: ICities[] }
  | { type: 'city/created' | 'city/loaded'; payload: ICities }
  | { type: 'city/deleted'; payload: string }
  | { type: 'rejected'; payload: string }
  | { type: 'loading' };

function reducer(state: IState, action: Action) {
  switch (action.type) {
    case 'loading':
      return { ...state, isLoading: true };
    case 'cities/loaded':
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };
    case 'city/loaded':
      return {
        ...state,
        isLoading: false,
        currentCity: action.payload,
      };
    case 'city/created':
      return {
        ...state,
        isLoading: false,
        cities:
          state.cities !== null
            ? [...state.cities, action.payload]
            : [action.payload],
        currentCity: action.payload,
      };
    case 'city/deleted':
      return {
        ...state,
        isLoading: false,
        cities:
          state.cities !== null
            ? state.cities.filter((city) => city.id !== action.payload)
            : [],
        currentCity: null,
      };
    case 'rejected':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      throw new Error('Incorrect action type');
  }
}

function CitiesProvider({ children }: { children: ReactNode }) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    (async () => {
      dispatch({ type: 'loading' });

      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        dispatch({ type: 'cities/loaded', payload: data });
      } catch {
        dispatch({
          type: 'rejected',
          payload: 'There was an error loading data of cities...',
        });
      }
    })();
  }, []);

  async function getCity(id: string) {
    if (id.toString() === currentCity?.id) return;

    dispatch({ type: 'loading' });

    try {
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      dispatch({ type: 'city/loaded', payload: data });
    } catch {
      dispatch({
        type: 'rejected',
        payload: 'There was an error loading the city...',
      });
    }
  }

  async function createCity(newCity: ICities) {
    dispatch({ type: 'loading' });

    try {
      const res = await fetch(`${BASE_URL}/cities`, {
        method: 'POST',
        body: JSON.stringify(newCity),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      dispatch({ type: 'city/created', payload: data });
    } catch {
      dispatch({
        type: 'rejected',
        payload: 'There was an error creating the city...',
      });
    }
  }

  async function deleteCity(id: string) {
    dispatch({ type: 'loading' });

    try {
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: 'DELETE',
      });

      dispatch({ type: 'city/deleted', payload: id });
    } catch {
      dispatch({
        type: 'rejected',
        payload: 'There was an error deleting the city...',
      });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        error,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);

  if (!context) {
    throw new Error('CitiesContext undefined');
  }

  return context;
}

export { CitiesProvider, useCities };
