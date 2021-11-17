import { createTheme } from "@mui/material";
import { grey, orange } from "@mui/material/colors";




const theme = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    primary: {
      main: "#800020",
      light: "#800039",
      dark: "#5a0028",
    },
    secondary: {
      main: "#801a00",
      light: "#5a1200",
      dark: "#280b03",
    },
    success: {
      main: "#c5c5c5",
      light: "#efefef",
      dark: "#000",
    },
    warning: {
      main: "#8c8b8b",
      light: "rgba(253,253,253,0.51)",
      dark: "#570202",
    },
  },
  typography: {
    fontFamily: " droid-sans, sans-serif",
  },
});

export default theme;
