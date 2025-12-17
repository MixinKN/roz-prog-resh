import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Create a theme instance.
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    // Можно настроить для каждой вариации отдельно
    h1: { lineHeight: 1.2 },
    h2: { lineHeight: 1.25 },
    h3: { lineHeight: 1.3 },
    h4: { lineHeight: 1.35 },
    h5: { lineHeight: 1.4 },
    h6: { lineHeight: 1.45 },
    body1: { lineHeight: 1.6 },
    body2: { lineHeight: 1.6 },
    subtitle1: { lineHeight: 1.5 },
    subtitle2: { lineHeight: 1.5 },
    button: { lineHeight: 1.2 },
    caption: { lineHeight: 1.4 },
    overline: { lineHeight: 1.4 },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          // Можно задать универсально для всех Typography
          // lineHeight: 1.6,
        },
      },
    },
  },
});

export default theme;
