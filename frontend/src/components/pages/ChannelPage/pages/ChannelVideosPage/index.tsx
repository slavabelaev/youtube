import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import {RouteLink} from "../../../../common/LinkListItem";

export const CHANNEL_VIDEOS_PAGE_ROUTE = '/videos';

export const CHANNEL_VIDEOS_MENU_ITEM: RouteLink = {
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
