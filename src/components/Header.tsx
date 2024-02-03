import Results from './Results';
import SearchPosts from './SearchPosts';
import { useContext } from 'react';
import { PostContext } from '@/context/Context';

const Header = () => {
  const context = useContext(PostContext);
  if (context === null) return;
  const { onClearPosts } = context;

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
};

export default Header;
