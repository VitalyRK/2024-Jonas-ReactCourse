import styles from './index.module.css';

interface IProps {
  children: JSX.Element[];
}

const Main = ({ children }: IProps) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
