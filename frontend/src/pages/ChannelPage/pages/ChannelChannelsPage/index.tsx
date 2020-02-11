import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import RouteItem from "../../../../interfaces/RouteItem";

export const CHANNEL_CHANNELS_PAGE_ROUTE = '/channels';

export const CHANNEL_CHANNELS_ROUTE: RouteItem = {
    title: 'Каналы',
    to: CHANNEL_CHANNELS_PAGE_ROUTE
};

const Page = React.lazy(() => import('./ChannelChannelsPage'));

const ChannelChannelsPage: React.FC = () => (
    <Suspense fallback={<LinearProgress />}>
        <Page />
    </Suspense>
);

export default ChannelChannelsPage;
