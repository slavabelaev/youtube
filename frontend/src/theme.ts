import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {blue, red} from "@material-ui/core/colors";

export const DEFAULT_THEME = createMuiTheme({
    palette: {
        primary: red,
        secondary: blue,
        type: 'light'
    }
});
