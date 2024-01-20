import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#64b5f6',
      main: '#7986cb',
      dark: '#545d8e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#00e676',
      main: '#00a152',
      dark: '#5a8b5c',
      contrastText: '#fff',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            height: 'fit-content',
            width: 'fit-content',
          },
        },
      ],
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: 'filled' },
          style: {
            backgroundColor: '#fff',
          },
        },
      ],
    },

    MuiTypography: {
      variants: [
        {
          props: { variant: 'h3' },
          style: {
            fontSize: '20px',
            fontWeight: 700,
          },
        },
        {
          props: { variant: 'h4' },
          style: {
            fontSize: '20px',
            textTransform: 'uppercase',
            fontWeight: 700,
          },
        },
        {
          props: { variant: 'subtitle1' },
          style: {
            fontSize: '13px',
            fontWeight: 500,
          },
        },
        {
          props: { variant: 'body1' },
          style: {
            fontSize: '18px',
            fontWeight: 500,
          },
        },
        {
          props: { variant: 'body2' },
          style: {
            fontSize: '15px',
            fontWeight: 700,
          },
        },
      ],
    },
  },
});

export default theme;
