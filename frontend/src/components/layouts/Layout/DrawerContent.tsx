import {makeStyles} from "@material-ui/core/styles";
import {createStyles, Theme} from "@material-ui/core";
import React, {ReactElement} from "react";
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

const DrawerContent: React.FC = (props) => {
    return (
        <div>
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
            <RouteLinks items={[
                ABOUT_ROUTE,
                PRESS_ROUTE,
                COPYRIGHT_ROUTE,
                CONTACT_US_ROUTE,
                CREATORS_ROUTE,
                ADS_ROUTE,
                DEV_ROUTE,
            ]} />
            <RouteLinks items={[
                TERMS_ROUTE,
                PRIVACY_ROUTE,
                RULES_ROUTE,
                NEW_ROUTE,
            ]} />
        </div>
    );
};

export default DrawerContent;
