import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#dbbf1f",
      light: "#edd51c",
      dark: "#c2a502"
    },
    secondary: {
      main: "#DADADA"
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "white"
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true
      }
    }
  }
});
