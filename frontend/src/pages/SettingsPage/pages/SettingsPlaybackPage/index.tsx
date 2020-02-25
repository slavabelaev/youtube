import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import {SETTINGS_PAGE_ROUTE} from "../../index";

export const SETTINGS_PLAYBACK_PAGE_ROUTE = `${SETTINGS_PAGE_ROUTE}/playback`;



const Page = React.lazy(() => import('./SettingsPlaybackPage'));

function SettingsPlaybackPage() {
    return (
        <Suspense fallback={<LinearProgress/>}>
            <Page/>
        </Suspense>
    )
}

export default SettingsPlaybackPage;
