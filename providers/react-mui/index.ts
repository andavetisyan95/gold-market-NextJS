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
      styleOverrides: {
        root: {
          "&:hover": {
            background: "#BE8E50",
            fontWeight: "bold",
            fontStyle: "normal",
            textAlign: "center",
            color: "#fff",
            border: "2px solid #fff",
          },
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
