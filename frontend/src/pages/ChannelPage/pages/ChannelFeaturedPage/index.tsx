import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import {RouteLink} from "../../../../components/common/LinkListItem";

export const CHANNEL_FEATURED_PAGE_ROUTE = '/featured';

export const CHANNEL_FEATURED_MENU_ITEM: RouteLink = {
    title: 'Главная',
    to: CHANNEL_FEATURED_PAGE_ROUTE
};

const Page = React.lazy(() => import('./ChannelFeaturedPage'));

function ChannelFeaturedPage() {
	return (
    <Suspense fallback={<LinearProgress />}>
        <Page />
    </Suspense>
)
}

export default ChannelFeaturedPage;
