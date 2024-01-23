import React from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './components/star-rating/StarRating';

// import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={['Terrible', 'Bad', 'Okay', 'Great', 'Amazing']}
    />
  </React.StrictMode>
);
