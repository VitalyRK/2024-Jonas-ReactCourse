import { IPost } from '@/helpers';

import List from './List';

interface IProps {
  posts: IPost[];
}

const Posts = ({ posts }: IProps) => {
  return (
    <section>
      <List posts={posts} />
    </section>
  );
};

export default Posts;
