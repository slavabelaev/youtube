import React from "react";
import logo from "./logo.svg";
import {Link} from "react-router-dom";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
    logo: {
        width: 80
    }
}));

const Logo: React.FC = () => {
    const classes = useStyles();
    return (
        <Link to="/">
            <img
                className={classes.logo}
                src={logo}
                alt="Logo"
            />
        </Link>
    )
};

export default Logo;
