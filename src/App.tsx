import { useEffect, useState } from 'react';

import moment from 'moment';

import Counter from './components/Counter';

import './global.css';

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState<string | null>(null);
  const today = Date.now();

  const decreaseStep = () => {
    if (step > 1) setStep((v) => v - 1);
  };

  const increaseStep = () => {
    setStep((v) => v + 1);
  };

  const decreaseCount = () => {
    setCount((v) => v - step);
  };

  const increaseCount = () => {
    setCount((v) => v + step);
  };

  useEffect(() => {
    setDate(() => moment(today + 86400000 * count).format('ddd MMM Do YYYY'));
  }, [count]);

  return (
    <>
      <Counter name={'Step'} decrease={decreaseStep} increase={increaseStep} />
      <Counter
        name={'Count'}
        decrease={decreaseCount}
        increase={increaseCount}
      />
      {count === 0 && <h3>Today is {date}</h3>}
      {count === 1 && (
        <h3>
          {count} day from today is {date}
        </h3>
      )}
      {count > 1 && (
        <h3>
          {count} days from today is {date}
        </h3>
      )}
      {count === -1 && (
        <h3>
          {count} day ago was {date}
        </h3>
      )}
      {count < -1 && (
        <h3>
          {count} days ago was {date}
        </h3>
      )}
      <h3>Step: {step}</h3>
      <h3>Count: {count}</h3>
    </>
  );
}

export default App;
