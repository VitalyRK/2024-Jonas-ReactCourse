import styles from './index.module.css';

interface IProps {
  isOpen: boolean;
  onClick: (value: React.SetStateAction<boolean>) => void;
}

const ButtonToggle = ({ isOpen, onClick }: IProps) => {
  const handleClick = () => {
    onClick((open: boolean) => !open);
  };

  return (
    <button className={styles.btn__toggle} onClick={handleClick}>
      {isOpen ? '-' : '+'}
    </button>
  );
};

export default ButtonToggle;
