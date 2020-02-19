import React, {useState} from "react";
import {DEFAULT_DARK_THEME, DEFAULT_THEME} from "./theme";
import {MuiThemeProvider, Theme} from "@material-ui/core";
import {Palette} from "@material-ui/core/styles/createPalette";

export interface ThemeContextProps {
    theme: Theme;
    switchMode: (type: Palette['type']) => void;
}

export const ThemeContext = React.createContext<ThemeContextProps | undefined>(undefined);

const ThemeProvider: React.FC = (props) => {
    const darkThemeEnabled = localStorage.getItem('darkThemeEnabled') === 'true';
    const [theme, setTheme] = useState(darkThemeEnabled ? DEFAULT_DARK_THEME : DEFAULT_THEME);

    const switchMode: ThemeContextProps['switchMode'] = (type) => {
        const isDarkTheme = type === 'dark';
        localStorage.setItem('darkThemeEnabled', String(isDarkTheme));
        setTheme(isDarkTheme ? DEFAULT_DARK_THEME : DEFAULT_THEME);
    };

    return (
        <ThemeContext.Provider value={{
            theme,
            switchMode
        }}>
            <MuiThemeProvider theme={theme}>
                {props.children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    )
};

export default ThemeProvider;
