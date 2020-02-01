import {makeStyles} from "@material-ui/core/styles";
import {AppBar, createStyles, IconButton, IconButtonProps, Theme, Toolbar} from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import {Link} from "react-router-dom";
import logo from "../logo.svg";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AvatarPopoverButton from "../../AvatarPopoverButton";
import Box from "@material-ui/core/Box";
import NotificationsButton from "../../NotificationsButton";

const useStyles = makeStyles((theme: Theme) => createStyles({
    appBar: {
        backgroundColor: '#fff',
        borderWidth: 0
    },
    menuButton: {
        marginRight: theme.spacing(1.5)
    },
    logo: {
        width: 80
    },
    toolbar: {
        ...theme.mixins.toolbar
    },
    searchForm: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(1)
    },
    search: {
        width: '100%',
        maxWidth: 600
    },
}));

export interface LayoutAppBarProps {
    menuButtonProps: IconButtonProps
}
const LayoutAppBar: React.FC<LayoutAppBarProps> = ({ menuButtonProps }) => {
    const classes = useStyles();

    return (
        <>
            <AppBar
                position="fixed"
                variant="outlined"
                className={classes.appBar}
            >
                <Toolbar color="inherit">
                    <IconButton
                        className={classes.menuButton}
                        edge="start"
                        {...menuButtonProps}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link to="/">
                        <img
                            className={classes.logo}
                            src={logo}
                            alt="Logo"
                        />
                    </Link>
                    <form
                        className={classes.searchForm}
                    >
                        <TextField
                            className={classes.search}
                            color="secondary"
                            variant="outlined"
                            margin="dense"
                            placeholder="Введите запрос"
                            InputProps={{
                                endAdornment: (
                                    <Box display="flex">
                                        <IconButton size="small">
                                            <KeyboardIcon />
                                        </IconButton>
                                        <IconButton size="small">
                                            <SearchIcon />
                                        </IconButton>
                                    </Box>
                                ),
                            }}
                        />
                    </form>
                    <IconButton>
                        <VideoCallIcon />
                    </IconButton>
                    <IconButton>
                        <AppsIcon />
                    </IconButton>
                    <NotificationsButton />
                    <AvatarPopoverButton />
                </Toolbar>
            </AppBar>
            <div className={classes.toolbar} />
        </>
    )
};

export default LayoutAppBar;
