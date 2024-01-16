import { IItem } from '@/App';

import styles from './index.module.css';

interface IProps {
  item: IItem;
  setCheckedItem: (id: number) => void;
  removeItem: (id: number) => void;
}

const Item = ({
  item: { id, quantity, description, checked },
  setCheckedItem,
  removeItem,
}: IProps) => {
  return (
    <div className={styles.item}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={checked}
        onChange={() => setCheckedItem(id)}
      />
      <span>{quantity}</span>
      <span style={checked ? { textDecorationLine: 'line-through' } : {}}>
        {description.toLocaleUpperCase()}
      </span>
      <button className={styles.button} onClick={() => removeItem(id)}>
        ❌
      </button>
    </div>
  );
};

export default Item;
