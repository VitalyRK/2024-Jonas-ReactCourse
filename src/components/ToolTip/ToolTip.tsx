import { ReactElement, useState } from 'react';

import styles from './index.module.css';

interface IProps {
  children: ReactElement;
  text: string;
}

const ToolTip = ({ children, text }: IProps) => {
  const [showToolTip, setShowToolTip] = useState(false);

  const onMouseEnterHandler = () => {
    setShowToolTip(true);
  };

  const onMouseLeaveHandler = () => {
    setShowToolTip(false);
  };

  return (
    <>
      <div
        className={styles.container}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        {children}
        {showToolTip && <span className={styles.tooltip}>{text}</span>}
      </div>
    </>
  );
};

export default ToolTip;
