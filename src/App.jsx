import React from "react";
import generateStore from "./redux/store";
import { Provider } from "react-redux";
import theme from "./ThemeConfig";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import './sass/main.css'
import Rou from "./components/Routes/Routes";

function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Rou />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
