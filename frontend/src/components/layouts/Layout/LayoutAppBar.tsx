import React, {useContext} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
    AppBar,
    createStyles,
    IconButton,
    Theme,
    Toolbar,
    useMediaQuery
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountMenuButton from "../../buttons/AccountMenuButton";
import NotificationsMenuButton from "../../buttons/NotificationsMenuButton";
import SearchButton from "../../buttons/SearchButton";
import SearchField from "../../SearchField";
import Logo from "../Logo";
import AppsMenuButton from "../../buttons/AppsMenuButton";
import VideoMenuButton from "../../buttons/VideoMenuButton";
import LayoutDrawerContext from "./LayoutDrawer/LayoutDrawerContext";

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

const LayoutAppBar: React.FC = () => {
    const classes = useStyles();
    const { actions } = useContext(LayoutDrawerContext);
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
            onClick={actions?.toggle}
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
