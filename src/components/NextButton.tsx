import { Action } from '@/App';
import { ActionKind } from '@/types';

interface IProps {
  dispatch: React.Dispatch<Action>;
  answer: number | null;
}

const NextButton = ({ dispatch, answer }: IProps) => {
  if (answer === null) return null;

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
};

export default NextButton;
