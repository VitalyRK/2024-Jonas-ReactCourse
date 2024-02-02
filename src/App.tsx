import { useEffect, useMemo, useState } from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import { polyfillCountryFlagEmojis } from 'country-flag-emoji-polyfill';

import City from './components/city/City';
import CityList from './components/city-list/CityList';
import CountriesList from './components/countries-list/CountriesList';
import Form from './components/form/Form';
import AppLayout from './pages/app-layout/AppLayout';
import HomePage from './pages/home-page/HomePage';
import Login from './pages/login-page/Login';
import NotFound from './pages/not-found-page/NotFound';
import Pricing from './pages/product-page/Pricing';
import Product from './pages/product-page/Product';

import './index.css';

polyfillCountryFlagEmojis();

const BASE_URL = 'http://localhost:8000';

export interface ICities {
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: {
    lat: number;
    lng: number;
  };
  id: number;
}

function App() {
  const [cities, setCities] = useState<ICities[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert('There was an error loading data...');
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const router = useMemo(() => {
    return createBrowserRouter([
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'product',
        element: <Product />,
      },
      {
        path: 'pricing',
        element: <Pricing />,
      },
      {
        path: 'app',
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: <Navigate replace to={'cities'} />,
          },
          {
            path: 'cities',
            element: <CityList cities={cities} isLoading={isLoading} />,
          },
          {
            path: 'cities/:id',
            element: <City />,
          },
          {
            path: 'countries',
            element: <CountriesList cities={cities} isLoading={isLoading} />,
          },
          {
            path: 'form',
            element: <Form />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ]);
  }, [cities, isLoading]);

  return <RouterProvider router={router} />;
}

export default App;
