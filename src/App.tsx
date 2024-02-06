import { RouterProvider } from 'react-router-dom';

import { polyfillCountryFlagEmojis } from 'country-flag-emoji-polyfill';

import { CitiesProvider } from './context/CitiesContext';
import { AuthProvider } from './context/FakeAuthContext';
import router from './router/Router';

import './index.css';

polyfillCountryFlagEmojis();

function App() {
  return (
    <CitiesProvider>
      <AuthProvider>
        <RouterProvider router={router} />;
      </AuthProvider>
    </CitiesProvider>
  );
}

export default App;
