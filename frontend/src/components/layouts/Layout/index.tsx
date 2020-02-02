import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {createStyles, Theme, useMediaQuery} from "@material-ui/core";
import LayoutAppBar from "./LayoutAppBar";
import Drawer from "@material-ui/core/Drawer";
import DrawerContent from "./DrawerContent";
import NavigationMenu from "../../menus/NavigationMenu";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => createStyles({
    body: {
        display: 'flex',
    },
    main: {
        flex: 1
    },
    drawerPermanent: {
        top: 64,
        bottom: 0,
        height: 'auto',
        borderWidth: 0,
    }
}));

export interface LayoutProps {
    drawerVariantUpSm?: 'permanent' | 'temporary';
}

const initialOpen = window.outerWidth >= 992;
const Layout: React.FC<LayoutProps> = ({ children, drawerVariantUpSm = 'permanent' }) => {
    const classes = useStyles();
    const isScreenDownSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const [open, setOpen] = React.useState(drawerVariantUpSm === 'temporary' ? false : initialOpen);
    const toggleDrawer = () => setOpen(!open);
    const drawerVariant = isScreenDownSm ? 'temporary' : drawerVariantUpSm;
    const isDrawerPermanent = drawerVariant === 'permanent';
    const drawerWidth = open ? 240 : 72;
    const drawerStyles = { width: drawerWidth };

    const drawerPermanent = open ? <DrawerContent /> : <NavigationMenu variant="vertical" />;

    const drawerTemporary = (
        <DrawerContent
            showAppBar
            onMenuButtonClick={toggleDrawer}
        />
    );

    const drawer = (
        <Drawer
            open={open}
            onClose={toggleDrawer}
            variant={drawerVariant}
            PaperProps={{
                className: clsx({
                    [classes.drawerPermanent]: isDrawerPermanent
                }),
                style: drawerStyles
            }}
        >
            {isDrawerPermanent ? drawerPermanent : drawerTemporary}
        </Drawer>
    );

    const drawerSpaceFiller = isDrawerPermanent ? <div style={drawerStyles} /> : null;

    const appBar = (
        <LayoutAppBar
            menuButtonProps={{
                onClick: toggleDrawer,
            }}
        />
    );

    const bottomNavigation = isScreenDownSm ? <NavigationMenu position="fixed" /> : null;

    return (
        <>
            {appBar}
            <div className={classes.body}>
                <div>
                    {drawer}
                    {drawerSpaceFiller}
                </div>
                <div className={classes.main}>
                    {children}
                </div>
            </div>
            {bottomNavigation}
        </>
    )
};

export default Layout;

export const withLayout = (Component: React.ComponentType, layoutProps?: LayoutProps): React.FC => () => (
    <Layout {...layoutProps}>
        <Component />
    </Layout>
);
