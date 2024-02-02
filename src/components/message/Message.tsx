import styles from './index.module.css';

interface IProps {
  message: string;
}

const Message = ({ message }: IProps) => {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
};

export default Message;
