import { useQuizz } from '@/context/QuizzContext';
import { ActionKind } from '@/types';

const NextButton = () => {
  const { answer, numQuestions, index, dispatch } = useQuizz();

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
