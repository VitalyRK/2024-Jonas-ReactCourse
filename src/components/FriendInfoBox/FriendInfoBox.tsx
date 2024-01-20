import { IDataFriends } from '@/modules/FriendsList/FriendsList';

import FriendInfoLine from '../FriendInfoLine/FriendInfoLine';
import styles from './index.module.css';

interface IProps {
  dataFriends: IDataFriends[];
  removeFriend: (id: number) => void;
  setIsOpenDataFriend: (person: IDataFriends | null) => void;
}

const FriendInfoBox = ({
  dataFriends,
  removeFriend,
  setIsOpenDataFriend,
}: IProps) => {
  return (
    <>
      <div className={styles.container}>
        {dataFriends.map((friend, ind) => (
          <FriendInfoLine
            setIsOpenDataFriend={setIsOpenDataFriend}
            key={friend.name + ind}
            person={friend}
            removeFriend={removeFriend}
          />
        ))}
      </div>
    </>
  );
};

export default FriendInfoBox;
