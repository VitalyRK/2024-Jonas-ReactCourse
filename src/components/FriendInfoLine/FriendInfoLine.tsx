import {
  Avatar,
  Button,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';

import { IDataFriends } from '@/modules/FriendsList/FriendsList';

import styles from './index.module.css';

interface IProps {
  person: IDataFriends;
  removeFriend: (id: number) => void;
  setIsOpenDataFriend: (person: IDataFriends | null) => void;
}

const FriendInfoLine = ({
  person,
  person: { id, url, name, debt },
  removeFriend,
  setIsOpenDataFriend,
}: IProps) => {
  let subTitle = `You and ${name} are even`;
  let color = '';
  if (debt > 0) {
    subTitle = `${name} owes you ${debt}$`;
    color = 'green';
  } else if (debt < 0) {
    subTitle = `You owe ${name} ${Math.abs(debt)}$`;
    color = 'red';
  }

  const handleSelect = () => {
    setIsOpenDataFriend(person);
  };

  return (
    <Stack
      width={'500px'}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      marginBottom={2}
    >
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
        <Avatar sx={{ width: 50, height: 50 }} alt="avatar" src={url} />
        <div className={styles.container}>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="subtitle1" style={{ color: color }}>
            {subTitle}
          </Typography>
        </div>
      </Stack>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
        <Tooltip title="Delete" placement="left">
          <IconButton
            onClick={() => removeFriend(id)}
            aria-label="delete"
            color="error"
            sx={{ width: '40px', height: '40px' }}
          >
            -
          </IconButton>
        </Tooltip>
        <Button onClick={handleSelect} variant="contained">
          Select
        </Button>
      </Stack>
    </Stack>
  );
};

export default FriendInfoLine;
