import { memo } from 'react';
import FormAddPost from './FormAddPost';
import Posts from './Posts';
import { usePosts } from '@/context/Context';

const Main = memo(() => {
  const { posts, onAddPost } = usePosts();

  return (
    <main>
      <FormAddPost onAddPost={onAddPost} />
      <Posts posts={posts} />
    </main>
  );
});

export default Main;
