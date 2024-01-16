import { IItem } from '@/App';

import styles from './index.module.css';

interface IProps {
  itemList: IItem[];
}

const Stats = ({ itemList }: IProps) => {
  let checkedItems = 0;

  for (const item of itemList) {
    if (item.checked) checkedItems += 1;
  }

  let content = 'Start adding some items to your packing list 🚀';
  const progress = Math.round((100 / itemList.length) * checkedItems);

  if (itemList.length === 1)
    content = `💼 You have 1 item on your list, and you already packed ${checkedItems} (${progress}%)`;

  if (itemList.length > 1)
    content = `💼 You have ${itemList.length} items on your list, and you already packed ${checkedItems} (${progress}%)`;

  return (
    <em className={styles.container}>
      {itemList.length === checkedItems && checkedItems !== 0
        ? 'You got everything! Ready to go 🏝️'
        : content}
    </em>
  );
};

export default Stats;
