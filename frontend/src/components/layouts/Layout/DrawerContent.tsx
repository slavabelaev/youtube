import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {createStyles, IconButtonProps, Theme, useMediaQuery} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import {
    ABOUT_ROUTE, ADS_ROUTE, CONTACT_US_ROUTE, COPYRIGHT_ROUTE, CREATORS_ROUTE, DEV_ROUTE,
    NEW_ROUTE, PRESS_ROUTE, PRIVACY_ROUTE, RULES_ROUTE, TERMS_ROUTE
} from "../../../constants/routes";
import PrimaryMenu from "../../menus/PrimaryMenu";
import SecondaryMenu from "../../menus/SecondaryMenu";
import PlaylistsMenu from "../../menus/PlatlistsMenu";
import SubscriptionsMenu from "../../menus/SubscriptionsMenu";
import OtherFeaturesMenu from "../../menus/OtherFeaturesMenu";
import OptionsMenu from "../../menus/OptionsMenu";
import RouteLinks from "../../common/RouteLinks";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "../Logo";

const useStyles = makeStyles((theme: Theme) => createStyles({
    routeLinks: {
        padding: theme.spacing(3)
    },
    menuButton: {
        marginRight: theme.spacing(1.5)
    }
}));

export interface DrawerContentProps {
    menuButtonProps?: IconButtonProps
}

const DrawerContent: React.FC<DrawerContentProps> = ({ menuButtonProps }) => {
    const classes = useStyles();
    const isLargeScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))

    const appBar = (
        <AppBar
            position="sticky"
            color="inherit"
            elevation={0}
        >
            <Toolbar>
                <IconButton
                    {...menuButtonProps}
                    edge="start"
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Logo />
            </Toolbar>
        </AppBar>
    );

    return (
        <div>
            {!isLargeScreen ? appBar : null}
            <PrimaryMenu />
            <Divider />
            <SecondaryMenu />
            <PlaylistsMenu />
            <Divider />
            <SubscriptionsMenu />
            <Divider />
            <OtherFeaturesMenu />
            <Divider />
            <OptionsMenu />
            <Divider />
            <RouteLinks
                className={classes.routeLinks}
                items={[
                    ABOUT_ROUTE,
                    PRESS_ROUTE,
                    COPYRIGHT_ROUTE,
                    CONTACT_US_ROUTE,
                    CREATORS_ROUTE,
                    ADS_ROUTE,
                    DEV_ROUTE,
                ]}
            />
            <RouteLinks
                className={classes.routeLinks}
                style={{paddingTop: 0}}
                items={[
                    TERMS_ROUTE,
                    PRIVACY_ROUTE,
                    RULES_ROUTE,
                    NEW_ROUTE,
                ]}
            />
        </div>
    );
};

export default DrawerContent;
