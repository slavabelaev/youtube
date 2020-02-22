import createMuiTheme, {Theme} from "@material-ui/core/styles/createMuiTheme";
import {blue} from "@material-ui/core/colors";
import red from "@material-ui/core/colors/red";

export const DEFAULT_THEME: Theme = createMuiTheme({
    palette: {
        primary: {
            main: red["600"],
            ...red
        },
        secondary: blue,
        type: 'light'
    },
});

export const DEFAULT_DARK_THEME: Theme = createMuiTheme({
    palette: {
        primary: {
            main: red["600"],
            ...red
        },
        secondary: blue,
        type: "dark"
    }
});
