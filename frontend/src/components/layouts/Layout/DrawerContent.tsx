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
import {ABOUT_MENU_ITEM} from "../../../pages/AboutPage";
import {PRESS_MENU_ITEM} from "../../../pages/PressPage";
import {COPYRIGHT_MENU_ITEM} from "../../../pages/CopyrightPage";
import {CONTACTS_MENU_ITEM} from "../../../pages/ContactsPage";
import {CREATORS_MENU_ITEM} from "../../../pages/CreatorsPage";
import {ADS_MENU_ITEM} from "../../../pages/AdsPage";
import {DEV_MENU_ITEM} from "../../../pages/DevelopersPage";
import {TERMS_MENU_ITEM} from "../../../pages/TermsPage";
import {PRIVACY_MENU_ITEM} from "../../../pages/PrivacyPage";
import {NEW_MENU_ITEM} from "../../../pages/NewPage";
import {RULES_MENU_ITEM} from "../../../pages/PoliciesPage";
import {SUBSCRIPTIONS_MENU_ITEM} from "../../../pages/SubscriptionsPage";

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
            {renderTitle(SUBSCRIPTIONS_MENU_ITEM.title)}
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
                    ABOUT_MENU_ITEM,
                    PRESS_MENU_ITEM,
                    COPYRIGHT_MENU_ITEM,
                    CONTACTS_MENU_ITEM,
                    CREATORS_MENU_ITEM,
                    ADS_MENU_ITEM,
                    DEV_MENU_ITEM,
                ]}
            />
            <RouteLinks
                className={classes.routeLinks}
                style={{paddingTop: 0}}
                items={[
                    TERMS_MENU_ITEM,
                    PRIVACY_MENU_ITEM,
                    RULES_MENU_ITEM,
                    NEW_MENU_ITEM,
                ]}
            />
        </div>
    );
};

export default DrawerContent;
