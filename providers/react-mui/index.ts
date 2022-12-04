import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#baab36",
      light: "#edd51c",
      dark: "#c2a502",
    },
    secondary: {
      main: "#DADADA",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "white",
          fontFamily: "Comfortaa",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
