import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import {RouteLink} from "../../../../components/common/LinkListItem";

export const CHANNEL_CHANNELS_PAGE_ROUTE = '/channels';

export const CHANNEL_CHANNELS_MENU_ITEM: RouteLink = {
    title: 'Channels',
    to: CHANNEL_CHANNELS_PAGE_ROUTE
};

const Page = React.lazy(() => import('./ChannelChannelsPage'));

function ChannelChannelsPage() {
	return (
    <Suspense fallback={<LinearProgress />}>
        <Page />
    </Suspense>
)
}

export default ChannelChannelsPage;
