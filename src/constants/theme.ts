import { createTheme } from '@mui/material';
import { FONT_FAMILY } from './fonts';

const fontBackgroundColor = {
  primary: {
    light: 'rgb(22, 22, 22)',
    main: 'rgb(14, 14, 14)',
    dark: 'rgb(0, 0, 0)',
  },
  error: {
    main: 'rgb(0, 0, 0)',
  },
  warning: {
    main: 'rgb(0, 0, 0)',
  },
  common: {
    black: 'rgb(0, 0, 0)',
    white: 'rgb(255, 255, 255)',
  },
  grey: {
    700: 'rgb(60, 60, 60)',
    500: 'rgb(100, 100, 100)',
    300: 'rgb(150, 150, 150)',
    100: 'rgb(200, 200, 200)',
  },
};

const font = {
  h1: {
    fontFamily: FONT_FAMILY.Poppins,
  },
  h2: {
    fontFamily: FONT_FAMILY.Poppins,
  },
  h3: {
    fontFamily: FONT_FAMILY.Poppins,
  },
  h4: {
    fontFamily: FONT_FAMILY.Poppins,
  },
  h5: {
    fontFamily: FONT_FAMILY.Poppins,
  },
  h6: {
    fontFamily: FONT_FAMILY.Poppins,
  },
  subtitle1: {
    fontFamily: FONT_FAMILY.Poppins,
  },
  subtitle2: {
    fontFamily: FONT_FAMILY.Poppins,
  },
  body1: {
    fontFamily: FONT_FAMILY.Poppins,
  },
  body2: {
    fontFamily: FONT_FAMILY.Poppins,
  },
  button: {
    fontFamily: FONT_FAMILY.Poppins,
  },
  caption: {
    fontFamily: FONT_FAMILY.Poppins,
  },
  overline: {
    fontFamily: FONT_FAMILY.Poppins,
  },
};

export const theme = createTheme({
  typography: font,
  palette: fontBackgroundColor,
});
