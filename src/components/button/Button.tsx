import styles from './index.module.css';

interface IProps {
  children: string;
  type: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const Button = ({ children, type, onClick }: IProps) => {
  return (
    <>
      <div className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
        {children}
      </div>
    </>
  );
};

export default Button;
