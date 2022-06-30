import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";

const customTheme = {
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          display: "flex",
        },
        regular: {
          height: "56px",
          minHeight: "56px !important",
        },
      },
    },
    // MuiAppBar: {
    //   styleOverrides: {
    //     root: {
    //       display: "flex",
    //       position: "static",
    //     },
    //   },
    // },
  },
  palette: {
    primary: {
      main: "#4fc3f7",
      light: "#8bf6ff",
      dark: "#0093c4",
      contrastText: "#00000",
    },
    secondary: {
      main: "#1e88e5",
      light: "#6ab7ff",
      dark: "#005cb2",
      contrastText: "#fff",
    },
    text: {
      primary: "#fff",
      secondary: "#00000",
    },
    mode: "dark",
  },
};

export default customTheme;
