import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {createStyles, Theme} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import PrimaryMenu from "../../components/menus/PrimaryMenu";
import SecondaryMenu from "../../components/menus/SecondaryMenu";
import PlaylistsMenu from "../../components/menus/PlatlistsMenu";
import Subscriptions from "../../components/Subscriptions";
import OtherFeaturesMenu from "../../components/menus/OtherFeaturesMenu";
import OptionsMenu from "../../components/menus/OptionsMenu";
import RouteLinks from "../../components/RouteLinks";
import Typography from "@material-ui/core/Typography";
import {ABOUT_PAGE_ROUTE} from "../../pages/AboutPage";
import {PRESS_PAGE_ROUTE} from "../../pages/PressPage";
import {COPYRIGHT_PAGE_ROUTE} from "../../pages/CopyrightPage";
import {CONTACTS_PAGE_ROUTE} from "../../pages/ContactsPage";
import {CREATORS_PAGE_ROUTE} from "../../pages/CreatorsPage";
import {ADS_PAGE_ROUTE} from "../../pages/AdsPage";
import {DEV_PAGE_ROUTE} from "../../pages/DevelopersPage";
import {TERMS_PAGE_ROUTE} from "../../pages/TermsPage";
import {PRIVACY_PAGE_ROUTE} from "../../pages/PrivacyPage";
import {NEW_PAGE_ROUTE} from "../../pages/NewPage";
import {POLICIES_PAGE_ROUTE} from "../../pages/PoliciesPage";
import {SUBSCRIPTIONS_MENU_ITEM} from "../../pages/SubscriptionsPage";

const useStyles = makeStyles((theme: Theme) => createStyles({
    routeLinks: {
        padding: theme.spacing(3)
    },
    title: {
        padding: theme.spacing(1, 2, 0, 2)
    }
}));

function DrawerContent() {
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
            {renderTitle('More from YonTube')}
            <OtherFeaturesMenu />
            <Divider />
            <OptionsMenu />
            <Divider />
            <RouteLinks
                className={classes.routeLinks}
                items={[
                    { title: 'About', to: ABOUT_PAGE_ROUTE },
                    { title: 'Press', to: PRESS_PAGE_ROUTE },
                    { title: 'Copyright', to: COPYRIGHT_PAGE_ROUTE },
                    { title: 'Contact us', to: CONTACTS_PAGE_ROUTE },
                    { title: 'Creators', to: CREATORS_PAGE_ROUTE },
                    { title: 'Advertise', to: ADS_PAGE_ROUTE },
                    { title: 'Developers', to: DEV_PAGE_ROUTE },
                ]}
            />
            <RouteLinks
                className={classes.routeLinks}
                style={{paddingTop: 0}}
                items={[
                    { title: 'Terms', to: TERMS_PAGE_ROUTE },
                    { title: 'Privacy', to: PRIVACY_PAGE_ROUTE },
                    { title: 'Policy & Safety', to: POLICIES_PAGE_ROUTE },
                    { title: 'Test new features', to: NEW_PAGE_ROUTE }
                ]}
            />
        </div>
    )
}

export default DrawerContent;
