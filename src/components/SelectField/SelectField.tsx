import styles from './index.module.css';

interface IProps {
  satisfaction: number;
  text: string;
  setSatisfaction: (v: number) => void;
}

const SelectField = ({ satisfaction, text, setSatisfaction }: IProps) => {
  const value = satisfaction;

  return (
    <div className={styles.selectField}>
      <span>{text}</span>
      <select
        value={value}
        onChange={(e) => setSatisfaction(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied. (0%)</option>
        <option value={5}>It was okay. (5%)</option>
        <option value={10}>It was good. (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
};

export default SelectField;
