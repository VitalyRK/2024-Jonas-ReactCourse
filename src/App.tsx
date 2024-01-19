import About from './components/About/About';
import FriendsList from './modules/FriendsList/FriendsList';

import './global.css';

function App() {
  return (
    <>
      <h1>Eat-&apos;N-Split</h1>
      <FriendsList name={'list'} />
      <About />
    </>
  );
}

export default App;
