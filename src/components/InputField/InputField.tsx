import styles from './index.module.css';

interface IProps {
  totalBill: number;
  setTotalBill: (v: number) => void;
}

const InputField = ({ totalBill, setTotalBill }: IProps) => {
  const value = totalBill;

  return (
    <div className={styles.inputField}>
      <span>How much was the bill?</span>
      <input
        value={value}
        placeholder={'Bill value'}
        type="number"
        onChange={(e) => setTotalBill(Number(e.target.value))}
      ></input>
    </div>
  );
};

export default InputField;
