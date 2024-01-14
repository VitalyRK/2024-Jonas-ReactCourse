import styles from './index.module.css';

interface IProps {
  name: string;
  decrease: () => void;
  increase: () => void;
}

const Counter = ({ name, decrease, increase }: IProps) => {
  return (
    <div className={styles.counter}>
      <button onClick={decrease}>&#45;</button>
      <div>{name}</div>
      <button onClick={increase}>&#43;</button>
    </div>
  );
};

export default Counter;
