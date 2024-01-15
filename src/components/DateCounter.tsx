import { useEffect, useState } from 'react';

import CounterItem from './CounterItem/CounterItem';

const DateCounter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState('');
  const today = new Date();

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
    today.setDate(today.getDate() + count);
    setDate(today.toDateString());
  }, [count]);

  return (
    <>
      <h3>Date Counter</h3>
      <CounterItem
        name={'Step'}
        value={step}
        decrease={decreaseStep}
        increase={increaseStep}
      />
      <CounterItem
        name={'Count'}
        value={count}
        decrease={decreaseCount}
        increase={increaseCount}
      />
      {count === 0 && <h3>Today is </h3>}
      {count === 1 && <h3>{count} day from today is</h3>}
      {count > 1 && <h3>{count} days from today is</h3>}
      {count === -1 && <h3>{count} day ago was</h3>}
      {count < -1 && <h3>{count} days ago was</h3>}
      <h2>{date}</h2>
    </>
  );
};

export default DateCounter;
