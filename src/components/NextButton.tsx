import { Action } from '@/App';
import { ActionKind } from '@/types';

interface IProps {
  dispatch: React.Dispatch<Action>;
  answer: number | null;
  numQuestions: number;
  index: number;
}

const NextButton = ({ dispatch, answer, numQuestions, index }: IProps) => {
  if (answer === null) return null;

  if (index < numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: ActionKind.nextQuestion });
        }}
      >
        Next
      </button>
    );
  }

  if (index === numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: ActionKind.finish });
        }}
      >
        Finish
      </button>
    );
  }
};

export default NextButton;
