import Widget from '@/components/Widget/Widget';
import { ITech } from '@/helpers/Types';

import styles from './index.module.css';

interface IProps {
  techStack: ITech[];
}

const WidgetsModule = ({ techStack }: IProps) => {
  return (
    <div className={styles.widgets__module}>
      {techStack.map((techEl) => (
        <Widget
          key={techEl.tech}
          tech={techEl.tech}
          emoji={techEl.emoji}
          color={techEl.color}
        />
      ))}
    </div>
  );
};

export default WidgetsModule;
