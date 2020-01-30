import {makeStyles} from "@material-ui/core/styles";
import {createStyles, Theme, useMediaQuery} from "@material-ui/core";
import React, {ReactElement} from "react";
import LayoutAppBar from "./LayoutAppBar";
import Drawer from "@material-ui/core/Drawer";
import DrawerContent from "./DrawerContent";
import NavigationMenu from "../../menus/NavigationMenu";

const useStyles = makeStyles((theme: Theme) => {
    const scrollbarStyles = {
        overflow: 'auto',
        '&::-webkit-scrollbar': {
            width: 0
        },
        '&:hover::-webkit-scrollbar': {
            width: theme.spacing(1)
        },
        '&:hover::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.grey.A100
        }
    };
    return createStyles({
        body: {
            display: 'flex',
        },
        main: {
            flex: 1
        },
        drawerPaper: {
            ...scrollbarStyles
        },
        landscapeDrawer: {
            position: 'fixed',
            top: 64,
            left: 0,
            bottom: 0,
            backgroundColor: theme.palette.background.paper,
            zIndex: theme.zIndex.drawer,
            ...scrollbarStyles
        }
    })
});

export interface LayoutProps {
    children: ReactElement;
}

const isOpen = window.outerWidth >= 992;
const Layout: React.FC<LayoutProps> = ({ children }) => {
    const classes = useStyles();
    const isLargeScreen = useMediaQuery('(min-width: 992px)');
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
            <DrawerContent />
        </Drawer>
    );

    const largeScreenDrawer = (
        <>
            <div
                className={classes.landscapeDrawer}
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
                    onClick: toggleDrawer
                }}
            />
            <div className={classes.body}>
                {isLargeScreen ? largeScreenDrawer : smallScreenDrawer}
                <div className={classes.main}>
                    {children}
                </div>
            </div>
        </>
    )
};

export default Layout;
