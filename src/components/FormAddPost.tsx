import { useState } from 'react';

import { IPost } from '@/helpers';

interface IProps {
  onAddPost: (post: IPost) => void;
}

const FormAddPost = ({ onAddPost }: IProps) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!body || !title) return;
    onAddPost({ title, body });
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Post body"
      />
      <button>Add post</button>
    </form>
  );
};

export default FormAddPost;
