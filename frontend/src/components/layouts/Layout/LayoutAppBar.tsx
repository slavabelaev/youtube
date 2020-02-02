import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
    AppBar,
    createStyles,
    IconButton,
    IconButtonProps,
    Theme,
    Toolbar,
    useMediaQuery
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountMenuButton from "../../AccountMenuButton";
import NotificationsMenuButton from "../../NotificationsMenuButton";
import SearchButton from "../../SearchButton";
import SearchField from "../../SearchField";
import Logo from "../Logo";
import AppsMenuButton from "../../AppsMenuButton";
import VideoMenuButton from "../../VideoMenuButton";

const useStyles = makeStyles((theme: Theme) => createStyles({
    appBar: {
        backgroundColor: '#fff',
        borderWidth: 0
    },
    menuButton: {
        marginRight: theme.spacing(1.5)
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
    const isScreenUpMd = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
    const isScreenDownXs = useMediaQuery((theme: Theme) => theme.breakpoints.down('xs'));

    const searchForm = (
        <div
            className={classes.searchForm}
        >
            <SearchField />
        </div>
    );

    const menuButton = (
        <IconButton
            className={classes.menuButton}
            edge="start"
            {...menuButtonProps}
        >
            <MenuIcon />
        </IconButton>
    );

    return (
        <>
            <AppBar
                position="fixed"
                variant="outlined"
                className={classes.appBar}
            >
                <Toolbar color="inherit">
                    {isScreenDownXs ? null : menuButton}
                    <Logo />
                    {isScreenUpMd ? searchForm : null}
                    <div className={classes.side}>
                        {isScreenUpMd ? (
                            <>
                                <VideoMenuButton />
                                <AppsMenuButton />
                            </>
                        ) : <SearchButton />}
                        {isScreenDownXs ? null : <NotificationsMenuButton />}
                        <AccountMenuButton />
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbar} />
        </>
    )
};

export default LayoutAppBar;
