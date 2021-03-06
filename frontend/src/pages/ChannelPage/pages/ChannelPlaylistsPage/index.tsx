import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import {RouteLink} from "../../../../components/common/LinkListItem";

export const CHANNEL_PLAYLISTS_PAGE_ROUTE = '/playlists';

export const CHANNEL_PLAYLISTS_MENU_ITEM: RouteLink = {
    title: 'Playlists',
    to: CHANNEL_PLAYLISTS_PAGE_ROUTE
};

const Page = React.lazy(() => import('./ChannelPlaylistsPage'));

function ChannelPlaylistsPage() {
	return (
    <Suspense fallback={<LinearProgress />}>
        <Page />
    </Suspense>
)
}

export default ChannelPlaylistsPage;
