import styles from './index.module.css';

interface IProps {
  message: string;
}

const ErrorMessage = ({ message }: IProps) => {
  return (
    <p className={styles.error}>
      <span>⛔️</span> {message}
    </p>
  );
};

export default ErrorMessage;
