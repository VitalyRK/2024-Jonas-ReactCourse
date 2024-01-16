import styles from './index.module.css';

interface IProps {
  text: string;
  id: number;
  isClicked: boolean;
  setIsClickedID: (v: number | null) => void;
}

const Card = ({ text, id, isClicked, setIsClickedID }: IProps) => {
  const handleClick = () => {
    isClicked ? setIsClickedID(null) : setIsClickedID(id);
  };

  return (
    <div onClick={handleClick}>
      <p
        className={styles.card}
        style={
          isClicked
            ? {
                backgroundColor: '#bb5d5d',
                color: '#fff',
                borderColor: '#bb5d5d',
              }
            : {}
        }
      >
        {text}
      </p>
    </div>
  );
};

export default Card;
