import { IPost, createRandomPost } from '@/helpers';
import { ReactNode, createContext, useContext, useState } from 'react';

interface IContext {
  posts: IPost[];
  onAddPost: (post: IPost) => void;
  onClearPosts: () => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const PostContext = createContext<IContext | null>(null);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState('');

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post: IPost) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  return (
    <PostContext.Provider
      value={{
        posts: searchedPosts,
        onAddPost: handleAddPost,
        onClearPosts: handleClearPosts,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export function usePosts() {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error('context has to be used within <PostContext.Provider>');
  }

  return context;
}
