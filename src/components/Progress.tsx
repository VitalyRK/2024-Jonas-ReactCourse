interface IProps {
  ind: number;
  numQuestions: number;
  points: number;
  maxPossiblePoints: number;
  answer: number | null;
}

const Progress = ({
  ind,
  numQuestions,
  points,
  maxPossiblePoints,
  answer,
}: IProps) => {
  return (
    <header className="progress">
      <progress max={numQuestions} value={ind + Number(answer !== null)} />
      <p className="">
        Question <b>{ind + 1}</b> / {numQuestions}
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
