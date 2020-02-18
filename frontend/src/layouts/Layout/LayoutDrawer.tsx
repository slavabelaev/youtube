import React from 'react';
import DrawerContent from "./DrawerContent";
import NavigationMenu from "../../components/menus/NavigationMenu";
import Drawer, {DrawerProps} from "@material-ui/core/Drawer";
import clsx from "clsx";
import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "../Logo";

export interface LayoutDrawerProps {
    largeScreenVariant?: 'permanent' | 'temporary';
    open?: DrawerProps['open'];
    onClose?: () => void;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    paper: {
        '&::-webkit-scrollbar': {
            width: '0 !important'
        },
        '&:hover::-webkit-scrollbar': {
            width: '8px !important'
        }
    },
    root_variant_permanent: {
        top: theme.mixins.toolbar.minHeight,
        bottom: 0,
        height: 'auto',
        borderWidth: 0,
    },
    menuButton: {
        marginRight: theme.spacing(1.5)
    },
}));

const LayoutDrawer: React.FC<LayoutDrawerProps> = ({
    largeScreenVariant = 'permanent',
    open = true,
    onClose
}) => {
    const classes = useStyles();
    const isPermanent = largeScreenVariant === 'permanent';
    const drawerWidth = isPermanent ? (open ? 240 : 72) : 240;
    const style = { width: drawerWidth };

    const appBar = (
        <AppBar
            position="sticky"
            color="inherit"
            elevation={0}
        >
            <Toolbar>
                <IconButton
                    onClick={onClose}
                    edge="start"
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Logo />
            </Toolbar>
        </AppBar>
    );

    const permanent = open ? <DrawerContent /> : <NavigationMenu variant="vertical" />;

    const temporary = (
        <>
            {appBar}
            <DrawerContent />
        </>
    );

    const drawer = (
        <Drawer
            open={open}
            onClose={onClose}
            variant={largeScreenVariant}
            PaperProps={{
                className: clsx(classes.paper, {
                    [classes.root_variant_permanent]: isPermanent
                }),
                style
            }}
        >
            {isPermanent ? permanent : temporary}
        </Drawer>
    );

    const spaceFiller = isPermanent ? <div style={style} /> : null;
    
    return (
        <>
            {drawer}
            {spaceFiller}
        </>
    )
};

export default LayoutDrawer;
