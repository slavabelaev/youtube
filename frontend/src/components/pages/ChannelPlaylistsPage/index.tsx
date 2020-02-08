import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";

export const CHANNEL_PLAYLISTS_PAGE_ROUTE = '/playlists';

const Page = React.lazy(() => import('./ChannelPlaylistsPage'));

const ChannelPlaylistsPage: React.FC = () => (
    <Suspense fallback={<LinearProgress />}>
        <Page />
    </Suspense>
);

export default ChannelPlaylistsPage;
