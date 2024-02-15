import { RouterProvider } from 'react-router-dom';

import { polyfillCountryFlagEmojis } from 'country-flag-emoji-polyfill';

import { CitiesProvider } from './context/CitiesContext';
import { AuthProvider } from './context/FakeAuthContext';
import router from './router/Router';

import './index.css';
import { Suspense } from 'react';
import SpinnerFullPage from './components/spinner/SpinnerFullPage';

polyfillCountryFlagEmojis();

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <Suspense fallback={<SpinnerFullPage />}>
          <RouterProvider router={router} />;
        </Suspense>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
