import React from 'react';
import styles from './index.module.css';

interface IProps {
  query: string;
  onInput: (e: React.FormEvent<HTMLInputElement>) => void;
}

class Input extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <>
        <div className={styles.container}>
          <input
            type="text"
            placeholder="Search from location..."
            value={this.props.query}
            onChange={this.props.onInput}
          />
        </div>
      </>
    );
  }
}

export default Input;
