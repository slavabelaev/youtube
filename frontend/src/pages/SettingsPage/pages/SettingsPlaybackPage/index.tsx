import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import {PlayArrow} from "@material-ui/icons";
import {RouteLink} from "../../../../components/common/LinkListItem";

export const SETTINGS_PLAYBACK_PAGE_ROUTE = '/playback';

export const SETTINGS_PLAYBACK_MENU_ITEM: RouteLink = {
    title: 'Воспроизведение',
    to: SETTINGS_PLAYBACK_PAGE_ROUTE,
    icon: PlayArrow
};

const Page = React.lazy(() => import('./SettingsPlaybackPage'));

function SettingsPlaybackPage() {
    return (
        <Suspense fallback={<LinearProgress/>}>
            <Page/>
        </Suspense>
    )
}

export default SettingsPlaybackPage;
