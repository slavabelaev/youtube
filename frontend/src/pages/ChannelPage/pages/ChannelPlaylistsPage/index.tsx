import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import {MenuItem} from "../../../../components/MenuListItem";

export const CHANNEL_PLAYLISTS_PAGE_ROUTE = '/playlists';

export const CHANNEL_PLAYLISTS_MENU_ITEM: MenuItem = {
    title: 'Плэйлисты',
    to: CHANNEL_PLAYLISTS_PAGE_ROUTE
};

const Page = React.lazy(() => import('./ChannelPlaylistsPage'));

const ChannelPlaylistsPage: React.FC = () => (
    <Suspense fallback={<LinearProgress />}>
        <Page />
    </Suspense>
);

export default ChannelPlaylistsPage;
