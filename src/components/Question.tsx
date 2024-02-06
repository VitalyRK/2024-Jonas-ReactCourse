import Options from './Options';
import { useQuizz } from '@/context/QuizzContext';

const Question = () => {
  const { questions, index } = useQuizz();
  const { question, options, correctOption } = questions[index];

  return (
    <div className="">
      <h4>{question}</h4>
      <Options options={options} correct={correctOption} />
    </div>
  );
};

export default Question;
