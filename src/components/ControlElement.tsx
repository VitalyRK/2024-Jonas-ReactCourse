import { Action } from '@/App';

interface IProps {
  dispatch: React.Dispatch<Action>;
  type: string;
  text: string;
  disabled?: boolean;
}

const ControlElement = ({ dispatch, type, text, disabled }: IProps) => {
  return (
    <button
      className="ctrl-item"
      onClick={() => dispatch({ type: type })}
      disabled={disabled !== undefined ? !disabled : false}
    >
      {text}
    </button>
  );
};

export default ControlElement;
