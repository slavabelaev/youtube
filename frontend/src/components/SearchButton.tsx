import React from "react";
import {createStyles, IconButton, Theme} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {makeStyles} from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme: Theme) => createStyles({
    appBar: {
        borderWidth: 0
    },
}));

const SearchButton: React.FC = () => {
    const classes = useStyles();
    const [show, setShow] = React.useState(false);
    const toggle = () => setShow(!show);

    const appBar = (
        <AppBar
            className={classes.appBar}
            position="fixed"
            variant="outlined"
            color="inherit"
        >
            <Toolbar>
                <IconButton
                    edge="start"
                    onClick={toggle}
                >
                    <ArrowBackIcon />
                </IconButton>
                <InputBase
                    fullWidth
                    autoFocus
                    placeholder="Введите запрос"
                />
                <IconButton
                    edge="end"
                >
                    <MoreVertIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );

    const button = (
        <IconButton
            onClick={toggle}
        >
            <SearchIcon />
        </IconButton>
    );

    return (
        <>
            {show ? appBar : null}
            {button}
        </>
    )
};

export default SearchButton;
