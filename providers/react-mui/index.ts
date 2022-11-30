import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000000"
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true
      }
    }
  }
});
