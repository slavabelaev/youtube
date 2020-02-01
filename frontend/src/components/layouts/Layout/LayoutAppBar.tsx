import {makeStyles} from "@material-ui/core/styles";
import {AppBar, createStyles, IconButton, IconButtonProps, Theme, Toolbar, useMediaQuery} from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import {Link} from "react-router-dom";
import logo from "../logo.svg";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import AvatarPopoverButton from "../../AvatarPopoverButton";
import NotificationsButton from "../../NotificationsButton";
import SearchButton from "../../SearchButton";
import SearchField from "../../SearchField";

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
    side: {
        marginLeft: 'auto'
    }
}));

export interface LayoutAppBarProps {
    menuButtonProps: IconButtonProps
}
const LayoutAppBar: React.FC<LayoutAppBarProps> = ({ menuButtonProps }) => {
    const classes = useStyles();
    const isLargeScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

    const searchForm = (
        <div
            className={classes.searchForm}
        >
            <SearchField />
        </div>
    );

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
                    {isLargeScreen ? searchForm : null}
                    <div className={classes.side}>
                        {isLargeScreen ? (
                            <>
                                <IconButton>
                                    <VideoCallIcon />
                                </IconButton>
                                <IconButton>
                                    <AppsIcon />
                                </IconButton>
                            </>
                        ) : (
                            <SearchButton />
                        )}
                        <NotificationsButton />
                        <AvatarPopoverButton />
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbar} />
        </>
    )
};

export default LayoutAppBar;
