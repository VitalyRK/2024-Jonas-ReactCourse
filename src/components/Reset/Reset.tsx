import styles from './index.module.css';

interface IProps {
  ResetFunc: () => void;
}

const Reset = ({ ResetFunc }: IProps) => {
  return (
    <button className={styles.btnReset} onClick={ResetFunc}>
      Reset
    </button>
  );
};

export default Reset;
