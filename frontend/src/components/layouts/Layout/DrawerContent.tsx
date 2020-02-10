import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {createStyles, Theme} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import {
    ABOUT_ROUTE, ADS_ROUTE, CONTACT_US_ROUTE, COPYRIGHT_ROUTE, CREATORS_ROUTE, DEV_ROUTE,
    NEW_ROUTE, PRESS_ROUTE, PRIVACY_ROUTE, RULES_ROUTE, SUBSCRIPTIONS_ROUTE, TERMS_ROUTE
} from "../../../constants/routes";
import PrimaryMenu from "../../menus/PrimaryMenu";
import SecondaryMenu from "../../menus/SecondaryMenu";
import PlaylistsMenu from "../../menus/PlatlistsMenu";
import Subscriptions from "../../Subscriptions";
import OtherFeaturesMenu from "../../menus/OtherFeaturesMenu";
import OptionsMenu from "../../menus/OptionsMenu";
import RouteLinks from "../../RouteLinks";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) => createStyles({
    routeLinks: {
        padding: theme.spacing(3)
    },
    title: {
        padding: theme.spacing(1, 2, 0, 2)
    }
}));

const DrawerContent: React.FC = () => {
    const classes = useStyles();

    const renderTitle = (title: string) => (
        <Typography
            className={classes.title}
            variant="overline"
            component="h3"
        >
            {title}
        </Typography>
    );

    return (
        <div>
            <PrimaryMenu />
            <Divider />
            <SecondaryMenu />
            <PlaylistsMenu />
            <Divider />
            {renderTitle(SUBSCRIPTIONS_ROUTE.title)}
            <Subscriptions />
            <Divider />
            {renderTitle('Другие возможности')}
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
