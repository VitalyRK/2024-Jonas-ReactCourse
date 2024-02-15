import { createBrowserRouter, Navigate } from 'react-router-dom';

import City from '@/components/city/City';
import CityList from '@/components/city-list/CityList';
import CountriesList from '@/components/countries-list/CountriesList';
import Form from '@/components/form/Form';
// import AppLayout from '@/pages/app-layout/AppLayout';
// import HomePage from '@/pages/home-page/HomePage';
// import Login from '@/pages/login-page/Login';
// import NotFound from '@/pages/not-found-page/NotFound';
// import Pricing from '@/pages/product-page/Pricing';
// import Product from '@/pages/product-page/Product';
import ProtectedRoute from '@/pages/protected-route/ProtectedRoute';
import { lazy } from 'react';

const HomePage = lazy(() => import('@/pages/home-page/HomePage'));
const Pricing = lazy(() => import('@/pages/product-page/Pricing'));
const Product = lazy(() => import('@/pages/product-page/Product'));
const NotFound = lazy(() => import('@/pages/not-found-page/NotFound'));
const Login = lazy(() => import('@/pages/login-page/Login'));
const AppLayout = lazy(() => import('@/pages/app-layout/AppLayout'));

const router = createBrowserRouter([
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
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate replace to={'cities'} />,
      },
      {
        path: 'cities',
        element: <CityList />,
      },
      {
        path: 'cities/:id',
        element: <City />,
      },
      {
        path: 'countries',
        element: <CountriesList />,
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

export default router;
