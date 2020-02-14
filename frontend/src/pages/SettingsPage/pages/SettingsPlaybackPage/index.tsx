import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import {PlayArrow} from "@material-ui/icons";
import {MenuItem} from "../../../../components/MenuListItem";

export const SETTINGS_PLAYBACK_PAGE_ROUTE = '/playback';

export const SETTINGS_PLAYBACK_MENU_ITEM: MenuItem = {
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
