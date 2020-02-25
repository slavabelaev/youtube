import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import {SETTINGS_PAGE_ROUTE} from "../../index";

export const SETTINGS_ACCOUNT_PAGE_ROUTE = `${SETTINGS_PAGE_ROUTE}/account`;

const Page = React.lazy(() => import('./SettingsAccountPage'));

function SettingsAccountPage() {
    return (
        <Suspense fallback={<LinearProgress/>}>
            <Page/>
        </Suspense>
    )
}

export default SettingsAccountPage;
