import styles from './index.module.css';

interface IProps {
  name: string;
  value: number;
  decrease: () => void;
  increase: () => void;
}

const CounterItem = ({ name, value, decrease, increase }: IProps) => {
  return (
    <div className={styles.counter}>
      <button onClick={decrease}>-</button>
      <div>
        {name}: {value}
      </div>
      <button onClick={increase}>&#43;</button>
    </div>
  );
};

export default CounterItem;
