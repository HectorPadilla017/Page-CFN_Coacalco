import React from 'react';
import generateStore from './redux/store'
import { Provider } from 'react-redux'
import theme from './ThemeConfig';
import {ThemeProvider} from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';

import Routes from './components/Routes/Routes';

function App() {
  const store = generateStore()
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
