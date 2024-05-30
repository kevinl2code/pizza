import { createTheme } from '@mui/material/styles';

import { ThemeOptions } from '@mui/material/styles';

export const themeOptionsLight: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#4c662b',
      light: '#cdeda3',
    },
    secondary: {
      main: '#586249',
      light: '#dce7c8',
    },
    error: {
      main: '#ba1a1a',
    },
    warning: {
      main: '#ffdad6',
    },
    info: {
      main: '#386663',
    },
    success: {
      main: '#bcece7',
    },
    divider: '#75796c',
    background: {
      default: '#FAFAFA',
      paper: '#fff',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 990,
      xl: 1430,
    },
  },
};

//export const themeOptionsDark: ThemeOptions = {
//    palette: {
//        mode: 'dark',
//        primary: {
//            main: '#b1d18a',
//        },
//        secondary: {
//            main: '#bfcbad',
//        },
//        error: {
//            main: '#ffb4ab',
//        },
//        warning: {
//            main: '#93000a',
//        },
//        info: {
//            main: '#a0d0cb',
//        },
//        success: {
//            main: '#1f4e4b',
//        },
//        divider: '#8f9285',
//        background: {
//            default: '#12140e',
//            paper: '#44483d',
//        },
//    },
//};
export const theme = createTheme(themeOptionsLight);
