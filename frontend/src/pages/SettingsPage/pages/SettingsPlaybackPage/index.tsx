import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import RouteItem from "../../../../interfaces/RouteItem";
import {PlayArrow} from "@material-ui/icons";

export const SETTINGS_PLAYBACK_PAGE_ROUTE = '/playback';

export const SETTINGS_PLAYBACK_ROUTE: RouteItem = {
    title: 'Воспроизведение',
    to: SETTINGS_PLAYBACK_PAGE_ROUTE,
    icon: PlayArrow
};

const Page = React.lazy(() => import('./SettingsPlaybackPage'));

const SettingsPlaybackPage: React.FC = () => (
    <Suspense fallback={<LinearProgress />}>
        <Page />
    </Suspense>
);

export default SettingsPlaybackPage;
