import {
  Avatar,
  Button,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';

import { IDataFriends } from '@/modules/FriendsList/FriendsList';
import theme from '@/theme';

import styles from './index.module.css';

interface IProps {
  person: IDataFriends;
  removeFriend: (id: number) => void;
  setIsOpenDataFriend: (person: IDataFriends | null) => void;
  isOpenDataFriend: IDataFriends | null;
}

const FriendInfoLine = ({
  person,
  person: { id, url, name, debt },
  removeFriend,
  setIsOpenDataFriend,
  isOpenDataFriend,
}: IProps) => {
  const handleSelect = () => {
    if (isOpenDataFriend !== null && person.id === isOpenDataFriend.id) {
      setIsOpenDataFriend(null);
    } else {
      setIsOpenDataFriend(person);
    }
  };

  return (
    <Stack
      width={'500px'}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      marginBottom={2}
      sx={{
        padding: '5px 10px',
        borderRadius: '10px',
        backgroundColor:
          isOpenDataFriend?.id === id ? theme.palette.primary.light : '',
      }}
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
          {debt === 0 && (
            <Typography variant="subtitle1">You and {name} are even</Typography>
          )}
          {debt > 0 && (
            <Typography variant="subtitle1" style={{ color: 'green' }}>
              {name} owes you ${debt}$
            </Typography>
          )}
          {debt < 0 && (
            <Typography variant="subtitle1" style={{ color: 'red' }}>
              You owe ${name} ${Math.abs(debt)}$
            </Typography>
          )}
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
        <Button
          onClick={handleSelect}
          sx={{ width: '83.7px' }}
          variant="contained"
        >
          {isOpenDataFriend?.id === person.id ? 'Close' : 'Select'}
        </Button>
      </Stack>
    </Stack>
  );
};

export default FriendInfoLine;
