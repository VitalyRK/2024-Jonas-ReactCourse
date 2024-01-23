import styles from './index.module.css';
import Box from './Box';

interface IProps {
  children: JSX.Element[];
}

const Main = ({ children }: IProps) => {
  return (
    <main className={styles.main}>
      <Box>{children[0]}</Box>
      <Box>{children[1]}</Box>
    </main>
  );
};

export default Main;
