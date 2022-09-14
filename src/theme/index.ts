import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
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
    fontFamily: 'system-ui',
    h3: typos.header,
    h6: typos.tiny,
    subtitle1: typos.subtitle1,
    subtitle2: typos.subtitle2,
    body1: typos.body1,
    body2: typos.body2,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [],
      },
    },
    MuiButton: {
      root: {
        borderRadius: 4,
      },
      sizeLarge: {
        padding: '8px 62px',
      },
      label: {
        fontFamily: 'system-ui',
        textTransform: 'none',
        fontSize: 22,
        fontWeight: 100,
        lineHeight: '28px',
      }
    },
    MuiLink: {
      root: {
        color: colors.info.main,
      },
    },
    MuiFormControlLabel: {
      label: {
        color: colors.text.secondary,
      },
    },
    MuiSlider: {
      thumb: {
        width: 18,
        height: 18,
        marginTop: -8,
      }
    },
    MuiMenuItem: {
      root: {
        fontSize: '1.125rem',
      },
    },
    MuiSelect: {
      icon: {
        color: colors.text.secondary,
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
