import { Avatar } from '@mui/material';

import styles from './index.module.css';

interface IProps {
  name: string;
}

const FriendsList = ({ name }: IProps) => {
  return (
    <>
      <div className={styles.container}>{name}</div>
      <Avatar
        sx={{ width: 50, height: 50 }}
        alt="Remy Sharp"
        src="https://i.pravatar.cc/50"
      />
      <Avatar
        sx={{ width: 150, height: 150 }}
        alt="Remy Sharp"
        src="https://i.pravatar.cc/150"
      />
      <Avatar
        sx={{ width: 100, height: 100 }}
        alt="Remy Sharp"
        src="https://i.pravatar.cc/100"
      />
    </>
  );
};

export default FriendsList;
