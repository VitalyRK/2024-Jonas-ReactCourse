import { useState } from 'react';

import { Button } from '@mui/material';

import AddFriendInfoLineForm from '@/components/AddFriendInfoLineForm/AddFriendInfoLineForm';
import FriendInfoBox from '@/components/FriendInfoBox/FriendInfoBox';
import SplitBillArea from '@/components/SplitBillArea/SplitBillArea';

import styles from './index.module.css';

export interface IDataFriends {
  id: number;
  url: string;
  name: string;
  debt: number;
}

const initialData: IDataFriends[] = [
  {
    id: 0,
    url: 'https://i.pravatar.cc/70?img=8',
    name: 'Clark',
    debt: 0,
  },
  {
    id: 1,
    url: 'https://i.pravatar.cc/70?img=52',
    name: 'Tom',
    debt: -10,
  },
  {
    id: 2,
    url: 'https://i.pravatar.cc/70?img=63',
    name: 'Andreano',
    debt: 90,
  },
];

const FriendsList = () => {
  const [dataFriends, setDataFriends] = useState<IDataFriends[]>(initialData);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpenDataFriend, setIsOpenDataFriend] = useState<IDataFriends | null>(
    null
  );

  const addFriend = (person: IDataFriends) => {
    setDataFriends((prevData) => [...prevData, person]);
  };

  const changeData = (person: IDataFriends) => {
    setDataFriends((prev) =>
      prev.map((friend) => {
        if (friend.id === person.id) {
          return person;
        }
        return friend;
      })
    );
  };

  const removeFriend = (id: number) => {
    setDataFriends((prevData) => prevData.filter((friend) => friend.id !== id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <FriendInfoBox
          setIsOpenDataFriend={setIsOpenDataFriend}
          dataFriends={dataFriends}
          removeFriend={removeFriend}
        />
        {isOpenForm && (
          <AddFriendInfoLineForm
            addFriend={addFriend}
            setIsOpenForm={setIsOpenForm}
          />
        )}

        <Button onClick={() => setIsOpenForm(!isOpenForm)} variant="contained">
          {isOpenForm ? 'Close' : 'Add Friend'}
        </Button>
      </div>
      <div className={styles.right}>
        {isOpenDataFriend && (
          <SplitBillArea
            data={isOpenDataFriend}
            changeData={changeData}
            close={setIsOpenDataFriend}
          />
        )}
      </div>
    </div>
  );
};

export default FriendsList;
