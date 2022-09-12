import { ThemeOptions } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { Shadows } from "@material-ui/core/styles/shadows";
import colors from './colors';

const spacing = 8;

const index: ThemeOptions = {
  spacing,
  shape: {
    borderRadius: 6,
  },
  palette: {
    type: 'light',
    surface: colors.surface,
    background: {
      default: colors.surface[0],
      paper: colors.surface[1],
    },
    divider: colors.divider,
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
      disabled: colors.text.disabled,
      hint: colors.text.passive,
    },
    action: {
      active: colors.active,
      hover: colors.active,
      disabledBackground: colors.menu.itemHighlight,
    },
    primary: colors.primary,
    secondary: colors.secondary,
    error: colors.error,
    warning: colors.warning,
    info: colors.info,
    success: colors.success,
    recipeScore: {
      good: colors.recipeScore.good,
      medium: colors.recipeScore.medium,
      bad: colors.recipeScore.bad,
      veryBad: colors.recipeScore.veryBad,
      disabled: colors.recipeScore.disabled,
    },
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
