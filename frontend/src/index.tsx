import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ThemeProvider from "./contexts/ThemeContext";
import LanguageProvider from "./contexts/LanguageContext";
import LocationProvider from "./contexts/LocationContext";
import RestrictedModeProvider from "./contexts/RestrictedModeContext";
import MultipleProvider from "./contexts/MultipleProvider";

function Root() {
    return (
        <Router>
            <MultipleProvider providers={[
                RestrictedModeProvider,
                LocationProvider,
                LanguageProvider,
                ThemeProvider
            ]}>
                <App/>
            </MultipleProvider>
        </Router>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
