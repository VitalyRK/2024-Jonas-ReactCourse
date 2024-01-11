import { ITech } from '@/helpers/Types';

import styles from './index.module.css';

const Widget = ({ tech, emoji, color }: ITech) => {
  return (
    <div className={`${styles.widget__box} ${color}`}>
      <span>{tech}</span>
      <span className={styles.widget__emoji}>{emoji}</span>
    </div>
  );
};

export default Widget;
