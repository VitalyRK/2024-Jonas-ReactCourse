import { useEffect, useState } from 'react';

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

  const reset = () => {
    setCount(0);
  };

  useEffect(() => {
    today.setDate(today.getDate() + count);
    setDate(today.toDateString());
  }, [count]);

  return (
    <>
      <h3>Date Counter V2</h3>
      <div className="step__box">
        <button onClick={decreaseStep}>-</button>
        <input
          type="range"
          onChange={(e) => setStep(Number(e.target.value))}
          value={step}
          min={1}
          max={10}
        />
        <span>{step}</span>
        <button onClick={increaseStep}>&#43;</button>
      </div>
      <div>
        <button onClick={decreaseCount}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={increaseCount}>&#43;</button>
      </div>
      <button style={{ width: 'auto' }} onClick={reset}>
        Reset
      </button>

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
