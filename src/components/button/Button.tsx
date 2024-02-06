import styles from './index.module.css';

interface IProps {
  children: string;
  typeStyle: string;
  submit?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Button = ({ children, typeStyle, submit, onClick }: IProps) => {
  return (
    <>
      <button
        type={submit ? 'submit' : 'button'}
        className={`${styles.btn} ${styles[typeStyle]}`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
