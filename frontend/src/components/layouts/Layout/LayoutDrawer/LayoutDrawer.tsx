import React, {useContext} from 'react';
import DrawerContent from "../DrawerContent";
import NavigationMenu from "../../../menus/NavigationMenu";
import Drawer from "@material-ui/core/Drawer";
import clsx from "clsx";
import {createStyles, Theme, useMediaQuery} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "../../Logo";
import LayoutDrawerContext from "./LayoutDrawerContext";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root_variant_permanent: {
        top: 64,
        bottom: 0,
        height: 'auto',
        borderWidth: 0,
    },
    menuButton: {
        marginRight: theme.spacing(1.5)
    },
}));

const LayoutDrawer: React.FC = () => {
    const classes = useStyles();
    const { state, actions } = useContext(LayoutDrawerContext);
    const isPermanent = state?.variant === 'permanent';
    const drawerWidth = state?.open ? 240 : 72;
    const style = { width: drawerWidth };

    const appBar = (
        <AppBar
            position="sticky"
            color="inherit"
            elevation={0}
        >
            <Toolbar>
                <IconButton
                    onClick={actions?.toggle}
                    edge="start"
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Logo />
            </Toolbar>
        </AppBar>
    );

    const permanent = state?.open ? <DrawerContent /> : <NavigationMenu variant="vertical" />;

    const temporary = (
        <>
            {appBar}
            <DrawerContent />
        </>
    );

    const drawer = (
        <Drawer
            open={state?.open}
            onClose={actions?.toggle}
            variant={state?.variant}
            PaperProps={{
                className: clsx({
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
