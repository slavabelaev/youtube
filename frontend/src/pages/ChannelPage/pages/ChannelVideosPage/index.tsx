import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import {RouteLink} from "../../../../components/common/LinkListItem";

export const CHANNEL_VIDEOS_PAGE_ROUTE = '/videos';

export const CHANNEL_VIDEOS_MENU_ITEM: RouteLink = {
    title: 'Видео',
    to: CHANNEL_VIDEOS_PAGE_ROUTE
};

const Page = React.lazy(() => import('./ChannelVideosPage'));

function ChannelVideosPage() {
	return (
    <Suspense fallback={<LinearProgress />}>
        <Page />
    </Suspense>
)
}

export default ChannelVideosPage;
