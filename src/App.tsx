import moment from 'moment';

import './global.css';

function App() {
  const currentDate = moment().format('ddd MMM Do YYYY');
  console.log(currentDate);

  return (
    <>
      <h1>My Personal Page</h1>
      <h3>{currentDate}</h3>
    </>
  );
}

export default App;
