import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {DEFAULT_THEME} from "./theme";

const Root: React.FC = () => (
  <Router>
      <MuiThemeProvider theme={DEFAULT_THEME}>
        <App />
      </MuiThemeProvider>
  </Router>
);
ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
