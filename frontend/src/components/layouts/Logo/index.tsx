import React from "react";
import logo from "./logo.svg";
import {Link} from "react-router-dom";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

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
    return (
        <Link to="/" className={classes.link}>
            <img
                className={classes.img}
                src={logo}
                alt="Logo"
            />
        </Link>
    )
};

export default Logo;
