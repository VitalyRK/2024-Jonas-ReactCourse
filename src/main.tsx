import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import { QuizzProvider } from './context/QuizzContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QuizzProvider>
      <App />
    </QuizzProvider>
  </React.StrictMode>
);
