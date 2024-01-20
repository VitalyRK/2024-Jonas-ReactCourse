import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import About from './components/About/About';
import FriendsList from './modules/FriendsList/FriendsList';
import theme from './theme';

import './global.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FriendsList />
      <About />
    </ThemeProvider>
  );
}

export default App;
