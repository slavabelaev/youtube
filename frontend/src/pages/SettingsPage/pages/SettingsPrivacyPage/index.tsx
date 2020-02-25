import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import {SETTINGS_PAGE_ROUTE} from "../../index";

export const SETTINGS_PRIVACY_PAGE_ROUTE = `${SETTINGS_PAGE_ROUTE}/privacy`;

const Page = React.lazy(() => import('./SettingsPrivacyPage'));

function SettingsPrivacyPage() {
	return (
    <Suspense fallback={<LinearProgress />}>
        <Page />
    </Suspense>
)
}

export default SettingsPrivacyPage;
