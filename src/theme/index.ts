import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { Shadows } from '@material-ui/core/styles/shadows';
import colors from './colors';
import typos from './typos';

const spacing = 8;

const index: ThemeOptions = {
  spacing,
  shape: {
    borderRadius: 6,
  },
  palette: {
    type: 'light',
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    divider: colors.divider,
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
    },
    action: {
      active: colors.active,
      hover: colors.active,
      disabledBackground: colors.menu.itemHighlight,
    },
    primary: colors.primary,
    secondary: colors.secondary,
  },
  typography: {
    fontFamily: 'sans-serif',
    h3: typos.header,
    h6: typos.tiny,
    subtitle1: typos.subtitle,
    body1: typos.body1,
  },
  shadows: Array(25).fill('none') as Shadows,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [],
      },
    },
    MuiFilledInput: {
      root: {
        borderRadius: 6,
      },
      input: {
        borderRadius: 'inherit',
        padding: spacing * 2,
      },
    },
    MuiLink: {
      root: {
        color: colors.info.main,
      },
    },
  },
  props: {
    MuiButton: {
      size: 'large',
      variant: 'contained',
    },
    MuiTextField: {
      variant: 'filled',
    },
    MuiFilledInput: {
      disableUnderline: true,
    },
  },
};

export default createMuiTheme(index);
