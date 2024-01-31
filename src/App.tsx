import { useReducer } from 'react';
import Info from './components/Info';
import Main from './components/Main';
import './global.css';
import Control from './components/Control';

interface IState {
  balance: number;
  loan: number;
  isOpenAccount: boolean;
  isTakeLoan: boolean;
}

const initialState: IState = {
  balance: 0,
  loan: 0,
  isOpenAccount: false,
  isTakeLoan: false,
};

export type Action = {
  type: string;
};

function reducer(state: IState, action: Action): IState {
  switch (action.type) {
    case 'open':
      if (state.isOpenAccount) return state;
      return {
        ...state,
        balance: 500,
        isOpenAccount: true,
      };
    case 'deposit':
      return {
        ...state,
        balance: state.balance + 150,
      };
    case 'withdraw':
      return {
        ...state,
        balance: state.balance - 50,
      };
    case 'requestLoan':
      if (state.isTakeLoan) return state;
      return {
        ...state,
        balance: state.balance + 5000,
        loan: 5000,
        isTakeLoan: true,
      };
    case 'payLoan':
      if (!state.isTakeLoan) return state;
      return {
        ...state,
        balance: state.balance - 5000,
        loan: 0,
        isTakeLoan: false,
      };
    case 'close':
      if (state.balance === 0 && state.loan === 0) return initialState;
      return state;
    default:
      throw new Error('Incorrect action type');
  }
}

function App() {
  const [{ balance, loan, isOpenAccount }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <Main>
      <Info balance={balance} loan={loan} />
      <Control dispatch={dispatch} isOpenAccount={isOpenAccount} />
    </Main>
  );
}

export default App;
