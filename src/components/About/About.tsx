import ToolTip from '../ToolTip/ToolTip';
import styles from './index.module.css';

const About = () => {
  return (
    <section className={styles.about}>
      <a
        href="https://github.com/VitalyRK"
        target="_blank"
        className={styles.about__link}
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
      <a
        href="https://www.udemy.com/course/the-ultimate-react-course/"
        target="_blank"
        className={styles.about__link}
        rel="noreferrer"
      >
        <img
          className={styles.img__github}
          src="/udemy.svg"
          loading="lazy"
          decoding="async"
          alt="Udemi icon"
        />
        <ToolTip text="Context API, React Query, Redux Toolkit, Tailwind, advanced patterns. Author: Jonas Schmedtmann">
          <span>The Ultimate React Course 2024</span>
        </ToolTip>
      </a>
    </section>
  );
};

export default About;
