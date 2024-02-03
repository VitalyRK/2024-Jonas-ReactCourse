import { IPost } from '@/helpers';
import { createContext } from 'react';

interface IContext {
  posts: IPost[];
  onAddPost: (post: IPost) => void;
  onClearPosts: () => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const PostContext = createContext<IContext | null>(null);
