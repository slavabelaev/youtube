import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import {RouteLink} from "../../../../components/common/LinkListItem";

export const CHANNEL_COMMUNITY_PAGE_ROUTE = '/community';

export const CHANNEL_COMMUNITY_MENU_ITEM: RouteLink = {
    title: 'Сообщество',
    to: CHANNEL_COMMUNITY_PAGE_ROUTE
};

const Page = React.lazy(() => import('./ChannelCommunityPage'));

function ChannelCommunityPage() {
	return (
    <Suspense fallback={<LinearProgress />}>
        <Page />
    </Suspense>
)
}

export default ChannelCommunityPage;
