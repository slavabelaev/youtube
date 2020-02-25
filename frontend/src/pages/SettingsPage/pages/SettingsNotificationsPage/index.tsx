import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import {SETTINGS_PAGE_ROUTE} from "../../index";

export const SETTINGS_NOTIFICATIONS_PAGE_ROUTE = `${SETTINGS_PAGE_ROUTE}/notifications`;

const Page = React.lazy(() => import('./SettingsNotificationsPage'));

function SettingsNotificationsPage() {
    return (
        <Suspense fallback={<LinearProgress/>}>
            <Page/>
        </Suspense>
    )
}

export default SettingsNotificationsPage;
