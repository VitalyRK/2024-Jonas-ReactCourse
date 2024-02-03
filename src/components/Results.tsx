import { PostContext } from '@/context/Context';
import { useContext } from 'react';

const Results = () => {
  const context = useContext(PostContext);
  if (context === null) return;
  const { posts } = context;

  return <p>🚀 {posts.length} atomic posts found</p>;
};

export default Results;
