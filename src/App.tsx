import { useState } from 'react';

import About from './components/About/About';
import Form from './components/Form/Form';
import Logo from './components/Logo/Logo';
import PackingList from './components/PackingList/PackingList';
import Stats from './components/Stats/Stats';

import './global.css';

export interface IItem {
  id: number;
  quantity: number;
  description: string;
  checked: boolean;
}

function App() {
  const [itemList, setItemList] = useState<IItem[]>([
    { id: 0, quantity: 3, description: 'passports', checked: true },
    { id: 1, quantity: 25000, description: 'dollars', checked: false },
  ]);

  const pushItem = (value: IItem) => {
    setItemList([...itemList, value]);
  };

  const setCheckedItem = (id: number) => {
    setItemList((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const removeItem = (id?: number) => {
    if (id === undefined) setItemList([]);
    else setItemList((prevState) => prevState.filter((item) => item.id !== id));
  };

  return (
    <>
      <Logo />
      <Form pushItem={pushItem} />
      <PackingList
        itemList={itemList}
        setCheckedItem={setCheckedItem}
        removeItem={removeItem}
      />
      <Stats itemList={itemList} />
      <About />
    </>
  );
}

export default App;
