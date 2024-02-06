import Header from './components/Header';
import './global.css';
import Main from './components/Main';
import ErrorComponent from './components/ErrorComponent';
import Loader from './components/Loader';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import { StatusKind } from './types';
import Progress from './components/Progress';
import FinishScreen from './components/FinishScreen';
import Footer from './components/Footer';
import NextButton from './components/NextButton';
import Timer from './components/Timer';
import { useQuizz } from './context/QuizzContext';

function App() {
  const { status } = useQuizz();

  return (
    <>
      <Header />
      <Main>
        {status === StatusKind.error && <ErrorComponent />}
        {status === StatusKind.loading && <Loader />}
        {status === StatusKind.ready && <StartScreen />}
        {status === StatusKind.active && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === StatusKind.finished && <FinishScreen />}
      </Main>
    </>
  );
}

export default App;
