import { useContext } from 'react';
import FormAddPost from './FormAddPost';
import Posts from './Posts';
import { PostContext } from '@/context/Context';

const Main = () => {
  const context = useContext(PostContext);
  if (context === null) return;
  const { posts, onAddPost } = context;

  return (
    <main>
      <FormAddPost onAddPost={onAddPost} />
      <Posts posts={posts} />
    </main>
  );
};

export default Main;
