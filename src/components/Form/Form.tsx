import { useState } from 'react';

import { IItem } from '@/App';

import styles from './index.module.css';

interface IProps {
  pushItem: (value: IItem) => void;
}

const Form = ({ pushItem }: IProps) => {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const item: IItem = {
      id: Date.now(),
      quantity,
      description,
      checked: false,
    };
    pushItem(item);
    setQuantity(1);
    setDescription('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.text}>What do you need for your trip? 🧭</p>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_value, id) => id + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        className={styles.input}
        type="text"
        placeholder="Item..."
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className={styles.button}>Add</button>
    </form>
  );
};

export default Form;
