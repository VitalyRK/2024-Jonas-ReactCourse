import About from './components/About/About';
import TipCalculator from './modules/TipCalculator/TipCalculator';

import './global.css';

function App() {
  return (
    <>
      <h1>Tip Calculator</h1>
      <TipCalculator />
      <About />
    </>
  );
}

export default App;
