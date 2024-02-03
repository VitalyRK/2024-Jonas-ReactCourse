import { IPost } from '@/helpers';

interface IProps {
  posts: IPost[];
}

const List = ({ posts }: IProps) => {
  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default List;
