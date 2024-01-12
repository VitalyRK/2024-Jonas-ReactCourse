import styles from './index.module.css';

interface IProps {
  action?: () => void;
  children: string;
}

const MyButton = ({ action, children }: IProps) => {
  return (
    <button className={styles.myButton} onClick={action}>
      {children}
    </button>
  );
};

export default MyButton;
