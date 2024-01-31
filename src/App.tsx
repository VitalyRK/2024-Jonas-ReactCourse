import { useEffect, useReducer } from 'react';
import Header from './components/Header';
import './global.css';
import Main from './components/Main';
import ErrorComponent from './components/ErrorComponent';
import Loader from './components/Loader';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import { IState, StatusKind, ActionKind, IQuestion } from './types';
import NextButton from './components/NextButton';

const initialState: IState = {
  questions: [],
  status: StatusKind.loading,
  index: 0,
  answer: null,
  points: 0,
};

export type Action =
  | { type: ActionKind.dataReceived; payload: IQuestion[] }
  | { type: ActionKind.newAnswer; payload: number }
  | {
      type: ActionKind.dataFailed | ActionKind.start | ActionKind.nextQuestion;
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
      return { ...state, status: StatusKind.active };
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
    default:
      throw new Error('Incorrect action type');
  }
}

function App() {
  const [{ questions, status, index, answer }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;

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
            <Question
              questions={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextButton dispatch={dispatch} answer={answer} />
          </>
        )}
      </Main>
      {/* {questions.length > 0 && <p>{questions[0].question}</p>} */}
    </>
  );
}

export default App;
