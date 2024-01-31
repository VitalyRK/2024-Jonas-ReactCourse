import { useEffect, useReducer } from 'react';
import Header from './components/Header';
import './global.css';
import Main from './components/Main';
import ErrorComponent from './components/ErrorComponent';
import Loader from './components/Loader';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import { IState, StatusKind, ActionKind, IQuestion } from './types';
import Progress from './components/Progress';
import FinishScreen from './components/FinishScreen';
import Footer from './components/Footer';
import NextButton from './components/NextButton';
import Timer from './components/Timer';

const initialState: IState = {
  questions: [],
  status: StatusKind.loading,
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: 0,
};

const SECS_PER_QUESTION = 30;

export type Action =
  | { type: ActionKind.dataReceived; payload: IQuestion[] }
  | { type: ActionKind.newAnswer; payload: number }
  | {
      type:
        | ActionKind.dataFailed
        | ActionKind.start
        | ActionKind.nextQuestion
        | ActionKind.finish
        | ActionKind.restart
        | ActionKind.tick;
    };

function reducer(state: IState, action: Action): IState {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: StatusKind.ready,
      };
    case 'dataFailed':
      return { ...state, status: StatusKind.error };
    case 'start':
      return {
        ...state,
        status: StatusKind.active,
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case 'newAnswer':
      const question = state.questions[state.index];
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case 'nextQuestion':
      return { ...state, index: state.index + 1, answer: null };
    case 'finish':
      return {
        ...state,
        status: StatusKind.finished,
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case 'restart':
      return {
        ...initialState,
        questions: state.questions,
        status: StatusKind.ready,
        highscore: state.highscore,
      };
    case 'tick':
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status:
          state.secondsRemaining === 0 ? StatusKind.finished : state.status,
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    default:
      throw new Error('Incorrect action type');
  }
}

function App() {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  useEffect(() => {
    (async () => {
      try {
        const data = await fetch('http://localhost:8000/questions');
        const result = await data.json();
        dispatch({ type: ActionKind.dataReceived, payload: result });
      } catch {
        dispatch({ type: ActionKind.dataFailed });
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <Main>
        {status === StatusKind.error && <ErrorComponent />}
        {status === StatusKind.loading && <Loader />}
        {status === StatusKind.ready && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === StatusKind.active && (
          <>
            <Progress
              ind={index}
              numQuestions={numQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Question
              questions={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQuestions={numQuestions}
              />
            </Footer>
          </>
        )}
        {status === StatusKind.finished && (
          <FinishScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </>
  );
}

export default App;
