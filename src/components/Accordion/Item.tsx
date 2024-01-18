import { useState } from 'react';

import styles from './index.module.css';

interface IProps {
  id: number;
  title: string;
  text: string;
}

const Item = ({ id, title, text }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.item}>
        <div className={`${styles.title} ${isOpen && styles.active}`}>
          <span>{id < 10 ? `0${id}` : id}</span>
          <h3>{title}</h3>
          <span className={styles.button} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '-' : '+'}
          </span>
        </div>
        {isOpen && <p>{text}</p>}
      </div>
    </>
  );
};

export default Item;
