import { useQuizz } from '@/context/QuizzContext';

const Progress = () => {
  const { numQuestions, points, maxPossiblePoints, answer, index } = useQuizz();
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p className="">
        Question <b>{index + 1}</b> / {numQuestions}
      </p>

      <p>
        <b>
          {points} / {maxPossiblePoints}
        </b>
      </p>
    </header>
  );
};

export default Progress;
