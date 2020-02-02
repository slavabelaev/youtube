import {makeStyles} from "@material-ui/core/styles";
import {createStyles, Theme, useMediaQuery} from "@material-ui/core";
import React, {ReactElement} from "react";
import LayoutAppBar from "./LayoutAppBar";
import Drawer from "@material-ui/core/Drawer";
import DrawerContent from "./DrawerContent";
import NavigationMenu from "../../menus/NavigationMenu";

const useStyles = makeStyles((theme: Theme) => createStyles({
    body: {
        display: 'flex',
    },
    main: {
        flex: 1
    },
    drawerPaper: {
        overflow: 'auto'
    },
    largeScreenDrawer: {
        position: 'fixed',
        top: 64,
        left: 0,
        bottom: 0,
        backgroundColor: theme.palette.background.paper,
        zIndex: theme.zIndex.drawer,
        overflow: 'auto'
    }
}));

export interface LayoutProps {
    children: ReactElement;
}

const isOpen = window.outerWidth >= 992;
const Layout: React.FC<LayoutProps> = ({ children }) => {
    const classes = useStyles();
    const isScreenUpMd = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const [open, setOpen] = React.useState(isOpen);
    const toggleDrawer = () => setOpen(!open);
    const drawerWidth = open ? 240 : 72;
    const drawerStyles = { width: drawerWidth };

    const smallScreenDrawer = (
        <Drawer
            open={open}
            onClose={toggleDrawer}
            PaperProps={{
                className: classes.drawerPaper,
                style: drawerStyles
            }}
        >
            <DrawerContent
                menuButtonProps={{
                    onClick: toggleDrawer
                }}
            />
        </Drawer>
    );

    const largeScreenDrawer = (
        <>
            <div
                className={classes.largeScreenDrawer}
                style={drawerStyles}
            >
                {open ? <DrawerContent /> : <NavigationMenu variant="vertical" />}
            </div>
            <div style={drawerStyles} />
        </>
    );

    return (
        <>
            <LayoutAppBar
                menuButtonProps={{
                    onClick: toggleDrawer,
                }}
            />
            <div className={classes.body}>
                {isScreenUpMd ? largeScreenDrawer : smallScreenDrawer}
                <div className={classes.main}>
                    {children}
                </div>
            </div>
            {isSmallScreen ? (
                <NavigationMenu
                    position="fixed"
                />
            ) : null}
        </>
    )
};

export default Layout;
