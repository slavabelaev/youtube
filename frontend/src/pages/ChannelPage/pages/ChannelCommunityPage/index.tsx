import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import RouteItem from "../../../../interfaces/RouteItem";

export const CHANNEL_COMMUNITY_PAGE_ROUTE = '/community';

export const CHANNEL_COMMUNITY_ROUTE: RouteItem = {
    title: 'Сообщество',
    to: CHANNEL_COMMUNITY_PAGE_ROUTE
};

const Page = React.lazy(() => import('./ChannelCommunityPage'));

const ChannelCommunityPage: React.FC = () => (
    <Suspense fallback={<LinearProgress />}>
        <Page />
    </Suspense>
);

export default ChannelCommunityPage;
