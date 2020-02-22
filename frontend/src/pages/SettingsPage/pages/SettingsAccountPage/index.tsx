import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import {AccountBox} from "@material-ui/icons";
import {RouteLink} from "../../../../components/common/LinkListItem";

export const SETTINGS_ACCOUNT_PAGE_ROUTE = '/account';

export const SETTINGS_ACCOUNT_MENU_ITEM: RouteLink = {
    title: 'Account',
    to: SETTINGS_ACCOUNT_PAGE_ROUTE,
    icon: AccountBox
};

const Page = React.lazy(() => import('./SettingsAccountPage'));

function SettingsAccountPage() {
    return (
        <Suspense fallback={<LinearProgress/>}>
            <Page/>
        </Suspense>
    )
}

export default SettingsAccountPage;
