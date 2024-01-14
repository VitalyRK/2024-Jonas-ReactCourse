import MyButton from '../my-button/MyButton';
import styles from './index.module.css';

interface IProps {
  open: boolean;
  openElement: number;
  setOpenElement: React.Dispatch<React.SetStateAction<number>>;
}

const Modal = ({ open, openElement, setOpenElement }: IProps) => {
  const arrayForNumbersElements = [1, 2, 3];
  const arrayForText = [
    'Step 1: Learn React 🖥️',
    'Step 2: Apply for a job 💼',
    'Step 3: Get money 💰',
  ];

  const prev = () => {
    if (openElement > 1) setOpenElement((v: number) => v - 1);
  };

  const next = () => {
    if (openElement < 3) setOpenElement((v: number) => v + 1);
  };

  return (
    <>
      {open && (
        <div className={styles.modal}>
          <div className={styles.numbers}>
            {arrayForNumbersElements.map((number) => (
              <span
                key={`num-${number}`}
                className={`${styles.numbers__item} ${
                  openElement >= number ? styles.active : ''
                }`}
              >
                {number}
              </span>
            ))}
          </div>
          <div className={styles.text}>
            <p>{arrayForText[openElement - 1]}</p>
          </div>
          <div className={styles.action__btns}>
            <MyButton action={prev}>Previous</MyButton>
            <MyButton action={next}>Next</MyButton>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
