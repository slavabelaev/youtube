import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
    AppBar,
    createStyles,
    IconButton, IconButtonProps,
    Theme,
    Toolbar,
    useMediaQuery
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountPopoverButton from "../../components/buttons/AccountPopoverButton";
import NotificationsPopoverButton from "../../components/buttons/NotificationsPopoverButton";
import SearchButton from "../../components/buttons/SearchButton";
import SearchField from "../../components/SearchField";
import Logo from "../Logo";
import AppsPopoverButton from "../../components/buttons/AppsPopoverButton";
import VideoPopoverButton from "../../components/buttons/VideoPopoverButton";

interface LayoutAppBarProps {
    MenuButtonProps?: IconButtonProps;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    appBar: {
        //backgroundColor: 'inherit',
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

function LayoutAppBar({
    MenuButtonProps
}: LayoutAppBarProps) {
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
            {...MenuButtonProps}
        >
            <MenuIcon />
        </IconButton>
    );

    return (
        <>
            <AppBar
                position="fixed"
                color="inherit"
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
                                <VideoPopoverButton />
                                <AppsPopoverButton />
                            </>
                        ) : <SearchButton />}
                        <NotificationsPopoverButton />
                        <AccountPopoverButton />
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbar} />
        </>
    )
}

export default LayoutAppBar;
