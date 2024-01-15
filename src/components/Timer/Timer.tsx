import { useEffect, useRef, useState } from 'react';

import styles from './index.module.css';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isRunning) {
      timer.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      console.log('clearInterval');
      return clearInterval(timer.current as NodeJS.Timeout);
    };
  }, [isRunning]);

  const handlePlayPause = () => {
    if (isRunning && timer.current) clearInterval(timer.current);
    setIsRunning(!isRunning);
  };

  const handleStop = () => {
    setTime(0);
    setIsRunning(false);
    if (timer.current) clearInterval(timer.current);
  };

  const format = (time: number) => {
    let hours: number | string = Math.floor((time / 60 / 60) % 24);
    let minutes: number | string = Math.floor((time / 60) % 60);
    let seconds: number | string = Math.floor(time % 60);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <>
      <div className={styles.timer}>
        <h3>Stopwatch Timer</h3>
        <span>{format(time)}</span>
        <div className={styles.timer__controls}>
          <span onClick={handlePlayPause}>⏯</span>
          <span onClick={handleStop}>⏹</span>
        </div>
      </div>
    </>
  );
};

export default Timer;
