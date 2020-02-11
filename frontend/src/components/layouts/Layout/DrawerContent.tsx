import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {createStyles, Theme} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import PrimaryMenu from "../../menus/PrimaryMenu";
import SecondaryMenu from "../../menus/SecondaryMenu";
import PlaylistsMenu from "../../menus/PlatlistsMenu";
import Subscriptions from "../../Subscriptions";
import OtherFeaturesMenu from "../../menus/OtherFeaturesMenu";
import OptionsMenu from "../../menus/OptionsMenu";
import RouteLinks from "../../RouteLinks";
import Typography from "@material-ui/core/Typography";
import {ABOUT_ROUTE} from "../../../pages/AboutPage";
import {PRESS_ROUTE} from "../../../pages/PressPage";
import {COPYRIGHT_ROUTE} from "../../../pages/CopyrightPage";
import {CONTACTS_ROUTE} from "../../../pages/ContactsPage";
import {CREATORS_ROUTE} from "../../../pages/CreatorsPage";
import {ADS_ROUTE} from "../../../pages/AdsPage";
import {DEV_ROUTE} from "../../../pages/DevelopersPage";
import {TERMS_ROUTE} from "../../../pages/TermsPage";
import {PRIVACY_ROUTE} from "../../../pages/PrivacyPage";
import {NEW_ROUTE} from "../../../pages/NewPage";
import {RULES_ROUTE} from "../../../pages/PoliciesPage";
import {SUBSCRIPTIONS_ROUTE} from "../../../pages/SubscriptionsPage";

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
                    CONTACTS_ROUTE,
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
