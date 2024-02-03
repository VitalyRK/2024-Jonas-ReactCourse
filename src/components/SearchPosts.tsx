import { PostContext } from '@/context/Context';
import { useContext } from 'react';

const SearchPosts = () => {
  const context = useContext(PostContext);
  if (context === null) return;
  const { searchQuery, setSearchQuery } = context;

  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
};

export default SearchPosts;
