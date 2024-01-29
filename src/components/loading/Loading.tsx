import React from 'react';
import styles from './index.module.css';

class Loading extends React.Component {
  render() {
    return <p className={styles.loading}>Loading...</p>;
  }
}

export default Loading;
