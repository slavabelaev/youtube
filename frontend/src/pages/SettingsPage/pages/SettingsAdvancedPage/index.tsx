import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import {SETTINGS_PAGE_ROUTE} from "../../index";

export const SETTINGS_ADVANCED_PAGE_ROUTE = `${SETTINGS_PAGE_ROUTE}/advanced`;

const Page = React.lazy(() => import('./SettingsAdvancedPage'));

function SettingsAdvancedPage() {
    return (
        <Suspense fallback={<LinearProgress/>}>
            <Page/>
        </Suspense>
    )
}

export default SettingsAdvancedPage;
