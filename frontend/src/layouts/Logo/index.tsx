import React, {useContext} from "react";
import logo from "./logo.svg";
import logoDark from "./logoDark.svg";
import {Link} from "react-router-dom";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {ThemeContext} from "../../contexts/ThemeContext/ThemeContext";

const useStyles = makeStyles((theme: Theme) => createStyles({
    img: {
        width: 80
    },
    link: {
        display: 'inline-flex',
        alignItems: 'center'
    }
}));

const Logo: React.FC = () => {
    const classes = useStyles();
    const themeContext = useContext(ThemeContext);
    const darkModeEnabled = themeContext?.theme.palette.type === 'dark';
    return (
        <Link to="/" className={classes.link}>
            <img
                className={classes.img}
                src={darkModeEnabled ? logoDark : logo}
                alt="Logo"
            />
        </Link>
    )
};

export default Logo;
