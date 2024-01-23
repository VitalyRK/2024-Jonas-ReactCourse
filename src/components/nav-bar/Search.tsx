import { useState } from 'react';
import styles from './index.module.css';

const Search = () => {
  const [query, setQuery] = useState('');

  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default Search;
