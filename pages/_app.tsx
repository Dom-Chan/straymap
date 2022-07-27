import "../styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, AnyAction } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import { ThemeProvider, createTheme, Theme } from "@mui/material";



const store = createStore(reducers, compose(applyMiddleware(thunk)));
const theme = createTheme({
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
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
