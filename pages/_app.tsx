import "../styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import customTheme from "../styles/theme";
import {
  ThemeProvider,
  createTheme,
} from "@mui/material";

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const theme = createTheme(customTheme);
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
