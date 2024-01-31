import { Action } from '@/App';
import { ActionKind } from '@/types';

interface IProps {
  correct: number;
  options: string[];
  dispatch: React.Dispatch<Action>;
  answer: number | null;
}

const Options = ({ options, dispatch, answer, correct }: IProps) => {
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          key={option}
          className={`btn btn-option ${index === answer ? 'answer' : ''} ${
            hasAnswered ? (index === correct ? 'correct' : 'wrong') : ''
          }`}
          disabled={hasAnswered}
          onClick={() =>
            dispatch({ type: ActionKind.newAnswer, payload: index })
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
