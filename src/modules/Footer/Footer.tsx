import styles from './index.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/VitalyRK"
        target="_blank"
        className={styles.footer__link}
        rel="noreferrer"
      >
        <img
          className={styles.img__github}
          src="/github.svg"
          loading="lazy"
          decoding="async"
          alt="GitHub icon"
        />
        <span>Visit my GitHub</span>
      </a>
    </footer>
  );
};

export default Footer;
