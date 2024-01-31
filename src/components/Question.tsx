import { IQuestion } from '@/types';
import Options from './Options';
import { Action } from '@/App';

interface IProps {
  questions: IQuestion;
  dispatch: React.Dispatch<Action>;
  answer: null | number;
}

const Question = ({
  questions: { question, options, correctOption },
  dispatch,
  answer,
}: IProps) => {
  return (
    <div className="">
      <h4>{question}</h4>
      <Options
        options={options}
        dispatch={dispatch}
        answer={answer}
        correct={correctOption}
      />
    </div>
  );
};

export default Question;
