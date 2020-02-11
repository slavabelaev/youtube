import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import RouteItem from "../../../../interfaces/RouteItem";

export const CHANNEL_VIDEOS_PAGE_ROUTE = '/videos';

export const CHANNEL_VIDEOS_ROUTE: RouteItem = {
    title: 'Видео',
    to: CHANNEL_VIDEOS_PAGE_ROUTE
};

const Page = React.lazy(() => import('./ChannelVideosPage'));

const ChannelVideosPage: React.FC = () => (
    <Suspense fallback={<LinearProgress />}>
        <Page />
    </Suspense>
);

export default ChannelVideosPage;
