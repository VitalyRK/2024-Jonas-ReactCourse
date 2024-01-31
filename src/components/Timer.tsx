import { Action } from '@/App';
import { ActionKind } from '@/types';
import { useEffect } from 'react';

interface IProps {
  dispatch: React.Dispatch<Action>;
  secondsRemaining: number;
}

const Timer = ({ dispatch, secondsRemaining }: IProps) => {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: ActionKind.tick });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <>
      <div className="timer">
        {mins < 10 && '0'}
        {mins}:{seconds < 10 && '0'}
        {seconds}
      </div>
    </>
  );
};

export default Timer;
