import styles from './index.module.css';
import Logo from './Logo';

interface IProps {
  children: JSX.Element[];
}

const NavBar = ({ children }: IProps) => {
  return (
    <header className={styles.nav__bar}>
      <Logo />
      {children}
    </header>
  );
};

export default NavBar;
