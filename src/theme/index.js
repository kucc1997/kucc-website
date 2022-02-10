import { createTheme } from '@mui/material/styles'
import COLORS from '../config/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondary,
    },
    error: {
      main: COLORS.danger,
    },
    text: {
      primary: COLORS.black,
      secondary: COLORS.medium,
      light: COLORS.light,
    },
    btn: {
      main: '#402880',
      contrastText: '#fff',
    },
  },
})

export default theme
