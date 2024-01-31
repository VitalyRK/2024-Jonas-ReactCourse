import { Action } from '@/App';
import ControlElement from './ControlElement';

interface IProps {
  dispatch: React.Dispatch<Action>;
  isOpenAccount: boolean;
}

const Control = ({ dispatch, isOpenAccount }: IProps) => {
  return (
    <div className="control">
      <ControlElement dispatch={dispatch} type={'open'} text="Open account" />
      <ControlElement
        dispatch={dispatch}
        disabled={isOpenAccount}
        type={'deposit'}
        text="Deposit 150"
      />
      <ControlElement
        dispatch={dispatch}
        disabled={isOpenAccount}
        type={'withdraw'}
        text="Withdraw 50"
      />
      <ControlElement
        dispatch={dispatch}
        disabled={isOpenAccount}
        type={'requestLoan'}
        text="Request a loan of 5000"
      />
      <ControlElement
        dispatch={dispatch}
        disabled={isOpenAccount}
        type={'payLoan'}
        text="Pay loan"
      />
      <ControlElement
        dispatch={dispatch}
        disabled={isOpenAccount}
        type={'close'}
        text="Close account"
      />
    </div>
  );
};

export default Control;
