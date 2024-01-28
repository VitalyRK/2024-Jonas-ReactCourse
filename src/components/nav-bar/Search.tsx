import { useRef } from 'react';
import styles from './index.module.css';
import { useKey } from '@/helpers/useKey';

interface IProps {
  query: string;
  onInput: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ query, onInput }: IProps) => {
  const inputEl = useRef<HTMLInputElement | null>(null);

  useKey('Enter', () => {
    if (document.activeElement === inputEl.current) return;
    if (inputEl.current !== null) {
      inputEl.current.focus();
      onInput('');
    }
  });

  return (
    <input
      required
      id="search"
      className={styles.search}
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => onInput(e.target.value)}
      spellCheck={false}
      // autoFocus
      ref={inputEl}
    />
  );
};

export default Search;
