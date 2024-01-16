import { useState } from 'react';

import { IItem } from '@/App';

import Item from '../Item/Item';
import styles from './index.module.css';

interface IProps {
  itemList: IItem[];
  setCheckedItem: (id: number) => void;
  removeItem: (id?: number) => void;
}

const PackingList = ({ itemList, setCheckedItem, removeItem }: IProps) => {
  const [filter, setFilter] = useState('id');

  const sortList = itemList;
  if (filter === 'id') sortList.sort((a, b) => a.id - b.id);
  else if (filter === 'description') {
    sortList.sort((a, b) => a.description.localeCompare(b.description));
  } else if (filter === 'packed') {
    sortList.sort((a, b) => Number(a.checked) - Number(b.checked));
  }
  return (
    <section className={styles.container}>
      <div className={styles.list}>
        {sortList.map((item) => (
          <Item
            key={item.id}
            item={item}
            setCheckedItem={setCheckedItem}
            removeItem={removeItem}
          />
        ))}
      </div>
      <div className={styles.filter}>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value={'id'}>SORT BY INPUT ORDER</option>
          <option value={'description'}>SORT BY DESCRIPTION</option>
          <option value={'packed'}>SORT BY PACKED STATUS</option>
        </select>
        <button onClick={() => removeItem()}>Clear list ❌</button>
      </div>
    </section>
  );
};

export default PackingList;
