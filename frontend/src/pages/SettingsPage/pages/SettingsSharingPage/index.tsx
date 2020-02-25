import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import {SETTINGS_PAGE_ROUTE} from "../../index";

export const SETTINGS_SHARING_PAGE_ROUTE = `${SETTINGS_PAGE_ROUTE}/sharing`;

const Page = React.lazy(() => import('./SettingsSharingPage'));

function SettingsSharingPage() {
    return (
        <Suspense fallback={<LinearProgress/>}>
            <Page/>
        </Suspense>
    )
}

export default SettingsSharingPage;
