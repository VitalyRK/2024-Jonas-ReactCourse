import { useState } from 'react';

import {
  Box,
  Button,
  Grid,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';

import { IDataFriends } from '@/modules/FriendsList/FriendsList';
import theme from '@/theme';

import styles from './index.module.css';

interface IProps {
  data: IDataFriends;
  close: (v: IDataFriends | null) => void;
  changeData: (person: IDataFriends) => void;
}

const SplitBillArea = ({ data, data: { name }, close, changeData }: IProps) => {
  const [billValue, setBillValue] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const [whoPay, setWhoPay] = useState('you');

  const handleChange = (event: SelectChangeEvent) => {
    setWhoPay(event.target.value);
  };

  const handleSplit = () => {
    let newDebt;
    if (whoPay === 'you') newDebt = billValue - yourExpense + data.debt;
    else if (whoPay === 'he') newDebt = data.debt - yourExpense;
    changeData({ ...data, debt: newDebt !== undefined ? newDebt : data.debt });
    close(null);
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.light,
      }}
      className={styles.container}
    >
      <Grid textAlign={'left'} container alignItems={'center'} spacing={2}>
        <Grid item xs={11}>
          <Typography variant="h4" noWrap>
            Split a bill with {name}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Tooltip title="Close" placement="left">
            <IconButton
              onClick={() => close(null)}
              aria-label="delete"
              color="error"
              sx={{ width: '40px', height: '40px' }}
            >
              &times;
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs={7}>
          <Typography variant="body1" noWrap>
            💵 Bill value
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <TextField
            required
            type="number"
            value={billValue !== null ? billValue : ''}
            onChange={(e) => setBillValue(Number(e.target.value))}
            label="Enter bill"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={7}>
          <Typography variant="body1">🧍 Your expense</Typography>
        </Grid>
        <Grid item xs={5}>
          <TextField
            required
            type="number"
            value={yourExpense !== null ? yourExpense : ''}
            onChange={(e) =>
              setYourExpense(
                Number(e.target.value) > billValue
                  ? yourExpense
                  : Number(e.target.value)
              )
            }
            label="Enter value"
            variant="filled"
            fullWidth
          />
        </Grid>

        <Grid item xs={7}>
          <Typography variant="body1">🧑🏼‍🤝‍🧑🏼 {name}&apos;s expense</Typography>
        </Grid>
        <Grid item xs={5}>
          <TextField
            required
            disabled
            value={
              billValue !== null && yourExpense !== null && billValue !== 0
                ? billValue - yourExpense
                : 0
            }
            variant="outlined"
            sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
            fullWidth
          />
        </Grid>

        <Grid item xs={7}>
          <Typography variant="body1">🐎 Who is paying the bill?</Typography>
        </Grid>
        <Grid item xs={5}>
          <Select
            sx={{ backgroundColor: '#fff' }}
            value={whoPay}
            onChange={handleChange}
          >
            <MenuItem value={'you'}>You</MenuItem>
            <MenuItem value={'he'}>{name}</MenuItem>
          </Select>
        </Grid>

        <Grid item xs={12} textAlign={'right'}>
          <Button variant="contained" onClick={handleSplit}>
            Split bill
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SplitBillArea;
