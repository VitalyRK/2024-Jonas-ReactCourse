import { useState } from 'react';
import ButtonToggle from './ButtonToggle';
import styles from './index.module.css';

interface IProps {
  children: JSX.Element;
}

const Box = ({ children }: IProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={styles.box}>
      <ButtonToggle isOpen={isOpen} onClick={setIsOpen} />
      {isOpen && children}
    </div>
  );
};

export default Box;
