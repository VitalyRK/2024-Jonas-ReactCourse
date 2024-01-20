import { useState } from 'react';

import { Box, Button, Grid, TextField, Typography } from '@mui/material';

import { IDataFriends } from '@/modules/FriendsList/FriendsList';
import theme from '@/theme';

import styles from './index.module.css';

interface IProps {
  addFriend: (person: IDataFriends) => void;
  setIsOpenForm: (v: boolean) => void;
}

const AddFriendInfoLineForm = ({ addFriend, setIsOpenForm }: IProps) => {
  const [friendName, setFriendName] = useState('');
  const [urlImage, setUrlImage] = useState(
    `https://i.pravatar.cc/70?img=${Math.round(Math.random() * 70)}`
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const person: IDataFriends = {
      id: Date.now(),
      url: urlImage,
      name: friendName,
      debt: 0,
    };
    addFriend(person);
    setIsOpenForm(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.light,
      }}
      component="form"
      className={styles.container}
      onSubmit={handleSubmit}
    >
      <Grid container alignItems={'center'} spacing={2}>
        <Grid item xs={4}>
          <Typography variant="body1" noWrap>
            🧑‍🤝‍🧑 Friend name
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            required
            value={friendName}
            onChange={(e) => setFriendName(e.target.value)}
            label="Enter name"
            variant="outlined"
            spellCheck="false"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1">📷 Image URL</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            value={urlImage}
            onChange={(e) => setUrlImage(e.target.value)}
            label="Url of the image"
            variant="outlined"
            spellCheck="false"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} textAlign={'right'}>
          <Button type="submit" variant="contained">
            Add
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddFriendInfoLineForm;
